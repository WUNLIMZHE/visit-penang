// services/utils/validation.js

export function validateTrip({ title, description, startDate }) {
  // empty field check
  if (!title?.trim() || !description?.trim() || !startDate?.trim()) {
    return {
      valid: false,
      message: "Oops ... looks like you forgot to enter a value.",
    };
  }

  // data validation (start date cannot be in the past)
  const today = new Date();
  today.setHours(0, 0, 0, 0); // normalize to midnight
  const start = new Date(startDate);
  start.setHours(0, 0, 0, 0);

  if (start < today) {
    return {
      valid: false,
      message: "Trip starting date cannot be in the past.",
    };
  }

  return { valid: true };
}

export function validateActivity({
  location,
  startDate,
  endDate,
  startTime,
  endTime,
  tripDate,
}) {
  // empty field check
  if (
    !location?.trim() ||
    !startDate?.trim() ||
    !endDate?.trim() ||
    !startTime?.trim() ||
    !endTime?.trim()
  ) {
    return {
      valid: false,
      message: "Oops ... looks like you forgot to enter a value.",
    };
  }

  // date validation
  if (new Date(startDate) > new Date(endDate)) {
    return {
      valid: false,
      message: "Start date cannot be later than end date.",
    };
  }

  // time validation
  if (startDate === endDate && startTime >= endTime) {
    return {
      valid: false,
      message:
        "For the same day, start time cannot be later than or equal to end time.",
    };
  }

  // Trip and activity date check, activity date cannot be before trip date
  if (new Date(startDate) < new Date(tripDate)) {
    return {
      valid: false,
      message: "Activity start date cannot be before trip start date.",
    };
  }

  return { valid: true };
}

// status-based validator (pure)
export function checkForecastStatus(
  activityLastDate,
  forecastLastDate,
  { maxForecastDays = 5 } = {}
) {
  const msPerDay = 24 * 60 * 60 * 1000;

  if (!forecastLastDate) {
    return { status: "noForecast", message: "No forecast data available." };
  }

  const activityLast = new Date(activityLastDate);
  const forecastLast = new Date(forecastLastDate);
  const today = new Date();

  // validate
  if (
    Number.isNaN(activityLast.getTime()) ||
    Number.isNaN(forecastLast.getTime())
  ) {
    return { status: "invalidDate", message: "Invalid date provided." };
  }

  // normalize to local date-only to avoid time-of-day issues
  activityLast.setHours(0, 0, 0, 0);
  forecastLast.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  // useful numeric measures (can be negative)
  const daysToForecastEnd = Math.ceil(
    (forecastLast.getTime() - today.getTime()) / msPerDay
  );
  const daysActivityBeyondForecast = Math.ceil(
    (activityLast.getTime() - forecastLast.getTime()) / msPerDay
  );
  const daysForecastAfterActivity = Math.ceil(
    (forecastLast.getTime() - activityLast.getTime()) / msPerDay
  );

  // Past / expired
  if (activityLast.getTime() < today.getTime()) {
    return {
      status: "pastActivity",
      message: "This activity has already ended.",
      daysToForecastEnd,
      daysActivityBeyondForecast,
    };
  }

  // CASE: forecast contains data beyond activity end -> TRIM needed
  if (forecastLast.getTime() > activityLast.getTime()) {
    return {
      status: "trimForecast",
      message: `Forecast extends ${daysForecastAfterActivity} day(s) beyond activity end — trim forecast to activity end.`,
      daysForecastAfterActivity,
      daysToForecastEnd,
    };
  }

  // CASE: activity ends after forecast coverage OR forecast horizon itself exceeds maxForecastDays
  // Both mean "forecast cannot cover requested activity days" (treat them the same)
  // if (activityLast.getTime() > forecastLast.getTime() || daysToForecastEnd > maxForecastDays) {
  if (daysToForecastEnd > maxForecastDays) {
    return {
      status: "beyondForecast",
      message: `Forecast data is only available up to ${maxForecastDays} day(s) from today. 
Your selected activity extends ${daysActivityBeyondForecast} day(s) beyond the available forecast period.`,
      daysActivityBeyondForecast,
      daysToForecastEnd,
    };
  }

  if (activityLast.getTime() > forecastLast.getTime()) {
    return {
      status: "requestForecast",
      message: `Your activity extends ${daysActivityBeyondForecast} day(s) beyond the current forecast coverage. 
Please request an extended forecast up to the activity’s end date (maximum ${maxForecastDays} day(s) from today).`,
      daysActivityBeyondForecast,
      daysToForecastEnd,
    };
  }

  // Forecast exactly covers activity end
  if (activityLast.getTime() === forecastLast.getTime()) {
    return {
      status: "match",
      message: "Forecast exactly covers activity end.",
      daysToForecastEnd,
    };
  }

  // Default fallback (shouldn't happen)
  return {
    status: "unknown",
    message: "Unknown status.",
    daysToForecastEnd,
    daysActivityBeyondForecast,
  };
}

// context-aware mapper that returns spam boolean + helpful info
export function forecastSpam(
  activityLastDate,
  forecastLastDate,
  context = "form"
) {
  console.log(
    `activityLastDate: ${activityLastDate}; forecastLastDate: ${forecastLastDate}; context: ${context}`
  );
  const res = checkForecastStatus(activityLastDate, forecastLastDate);
  console.log(`res.status: ${res.status}`);

  switch (res.status) {
    case "noForecast":
      // no forecast — not spam in form, but caller may want to prompt user
      return { spam: false, status: res.status, message: res.message };

    case "invalidDate":
      return { spam: true, status: res.status, message: res.message };

    case "pastActivity":
      return { spam: true, status: res.status, message: res.message };

    case "trimForecast":
      // forecast has extra days after activity end — always trim, not spam
      return {
        spam: false,
        status: res.status,
        message: res.message,
        trimTo: activityLastDate,
        daysForecastAfterActivity: res.daysForecastAfterActivity,
      };

    // case "beyondForecast":
    //   // both: activity extends beyond forecast OR forecast horizon > max (both cannot be forecasted)
    //   if (context === "form") {
    //     // form => not spam; inform caller how many days are covered so caller can trim / warn user
    //     return {
    //       spam: false,
    //       status: res.status,
    //       message: `Forecast covers ${res.daysToForecastEnd} day(s) from today. Activity extends ${res.daysActivityBeyondForecast} day(s) beyond forecast coverage. Trim/limit forecast accordingly.`,
    //       daysToForecastEnd: res.daysToForecastEnd,
    //       daysActivityBeyondForecast: res.daysActivityBeyondForecast,
    //     };
    //   } else {
    //     // card => spam (card updates can't change activity date)
    //     return {
    //       spam: true,
    //       status: res.status,
    //       message: `Forecast cannot be updated: activity ends beyond forecast coverage.`,
    //       daysToForecastEnd: res.daysToForecastEnd,
    //       daysActivityBeyondForecast: res.daysActivityBeyondForecast,
    //     };
    //   }
    case "beyondForecast":
      return {
        spam: true,
        status: res.status,
        message: res.message,
      };

    case "requestForecast":
      return { spam: false, status: res.status, message: res.message };

    case "match":
      return {
        spam: true,
        status: res.status,
        message: res.message,
        daysToForecastEnd: res.daysToForecastEnd,
      };

    default:
      return { spam: false, status: res.status, message: res.message };
  }
}

// export function forecastSpam(activityLastDate, forecastLastDate) {
//   if (!forecastLastDate) {
//     console.log("No forecast data available.");
//     return {
//       spam: false,
//       status: "noForecast",
//       message: "No forecast data available.",
//     };
//   }
//   const msPerDay = 1000 * 60 * 60 * 24;

//   console.log(
//     `activityLastDate: ${activityLastDate}; forecastLastDate: ${forecastLastDate}`
//   );
//   const activityLast = new Date(activityLastDate);
//   const forecastLast = new Date(forecastLastDate);
//   const today = new Date();

//   if (Number.isNaN(activityLast.getTime()) || Number.isNaN(forecastLast.getTime())) {
//     return { status: "invalidDate", message: "Invalid date provided." };
//   }
//   console.log(
//     `activityLast: ${activityLast}; forecastLast: ${forecastLast}; today: ${today}`
//   );

//   // Normalize to date-only (midnight) to avoid time-of-day bugs
//   activityLast.setHours(0, 0, 0, 0);
//   forecastLast.setHours(0, 0, 0, 0);
//   today.setHours(0, 0, 0, 0);

//   if (activityLast.getTime() === forecastLast.getTime()) {
//     return {
//       spam: true,
//       status: "sameForecast",
//       message: "The current forecast is already the latest (only covers the next 5 days).",
//     }
//   }

//   // If the activity has already ended, flag as spam
//   if (activityLast < today) {
//     return {
//       spam: true,
//       status: "pastActivity",
//       message: "This activity has already ended.",
//     };
//   }

//   const diffTime = Math.abs(forecastLast.getDate() - today.getDate());
//   const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
//   console.log(`diffDays: ${diffDays}`);

//   // If the duration is more than 5 days, flag as spam
//   if (diffDays > 5) {
//     return {
//       spam: true,
//       status: "beyondForecast",
//       message:
//         "The current forecast is already the latest (only covers the next 5 days).",
//     };
//   }

//   return { spam: false, status: "ok", message: "" };
// }
