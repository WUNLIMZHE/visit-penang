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
// export function checkForecastStatus(
//   activityStartDate,
//   activityLastDate,
//   forecastStartDate,
//   forecastLastDate,
//   { maxForecastDays = 5 } = {}
// ) {
//   const msPerDay = 24 * 60 * 60 * 1000;

//   const activityStart = new Date(activityStartDate);
//   const activityLast = new Date(activityLastDate);
//   const forecastStart = new Date(forecastStartDate);
//   const forecastLast = new Date(forecastLastDate);
//   const today = new Date();

//   // validate
//   if (
//     Number.isNaN(activityLast.getTime()) ||
//     Number.isNaN(forecastLast.getTime())
//   ) {
//     return { status: "invalidDate", message: "Invalid date provided." };
//   }

//   // normalize to local date-only to avoid time-of-day issues
//   activityStart.setHours(0, 0, 0, 0);
//   activityLast.setHours(0, 0, 0, 0);
//   forecastStart.setHours(0, 0, 0, 0);
//   forecastLast.setHours(0, 0, 0, 0);
//   today.setHours(0, 0, 0, 0);

//   // useful numeric measures (can be negative)
//   const daysToForecastEnd = Math.ceil(
//     (forecastLast.getTime() - today.getTime()) / msPerDay
//   );
//   const daysActivityBeyondForecast = Math.ceil(
//     (activityLast.getTime() - forecastLast.getTime()) / msPerDay
//   );
//   console.log(`daysActivityBeyondForecast: ${daysActivityBeyondForecast}`);
//   const daysForecastAfterActivity = Math.ceil(
//     (forecastLast.getTime() - activityLast.getTime()) / msPerDay
//   );
//   const maxForecastEnd = new Date(today.getTime() + maxForecastDays * msPerDay);
//   maxForecastEnd.setHours(0, 0, 0, 0);

//     // CASE: activity ends after forecast coverage OR forecast horizon itself exceeds maxForecastDays
//   // Both mean "forecast cannot cover requested activity days" (treat them the same)
//   // if (activityLast.getTime() > forecastLast.getTime() || daysToForecastEnd > maxForecastDays) {
//   console.log(
//     `maxForecastEnd: ${maxForecastEnd}; forecastLast: ${forecastLast}`
//   );
//   if (forecastStart.getTime() >= maxForecastEnd.getTime() || forecastLast.getTime() >= maxForecastEnd.getTime()) {
//     return {
//       status: "beyondForecast",
//       message: `Forecast data is only available up to ${maxForecastDays} day(s) from today.
// Your selected activity extends ${daysActivityBeyondForecast} day(s) beyond the available forecast period.`,
//       daysActivityBeyondForecast,
//       daysToForecastEnd,
//     };
//   }

//   // CASE: no forecast data at all
//   if (!forecastLastDate) {
//     return { status: "noForecast", message: "No forecast data available." };
//   }

//     // CASE: forecast contains data beyond activity end -> TRIM needed
//   if (
//     forecastStart.getTime() < activityStart.getTime() ||
//     forecastLast.getTime() > activityLast.getTime()
//   ) {
//     return {
//       status: "trimForecast",
//       message: `Forecast extends ${daysForecastAfterActivity} day(s) beyond activity end — trim forecast to activity end.`,
//       daysForecastAfterActivity,
//       daysToForecastEnd,
//     };
//   }

//   // Past / expired
//   if (activityLast.getTime() < today.getTime()) {
//     return {
//       status: "pastActivity",
//       message: "This activity has already ended.",
//       daysToForecastEnd,
//       daysActivityBeyondForecast,
//     };
//   }

//   if (activityLast.getTime() > forecastLast.getTime()) {
//     return {
//       status: "requestForecast",
//       message: `Your activity extends ${daysActivityBeyondForecast} day(s) beyond the current forecast coverage.
// Please request an extended forecast up to the activity’s end date (maximum ${maxForecastDays} day(s) from today).`,
//       daysActivityBeyondForecast,
//       daysToForecastEnd,
//     };
//   }

//   // Forecast exactly covers activity end
//   if (activityLast.getTime() === forecastLast.getTime()) {
//     return {
//       status: "match",
//       message: "Forecast exactly covers activity end.",
//       daysToForecastEnd,
//     };
//   }

//   // Default fallback (shouldn't happen)
//   return {
//     status: "unknown",
//     message: "Unknown status.",
//     daysToForecastEnd,
//     daysActivityBeyondForecast,
//   };
// }

// status-based validator (optimized to reduce API calls)
export function checkForecastStatus(
  activityStartDate,
  activityEndDate,
  forecastStartDate,
  forecastEndDate,
  { maxForecastDays = 5 } = {}
) {
  const MS_PER_DAY = 24 * 60 * 60 * 1000;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Parse & normalize input
  const activityStart = new Date(activityStartDate);
  const activityEnd = new Date(activityEndDate);
  const forecastStart = new Date(forecastStartDate);
  const forecastEnd = new Date(forecastEndDate);

  [activityStart, activityEnd, forecastStart, forecastEnd].forEach((d) =>
    d.setHours(0, 0, 0, 0)
  );

  // Validation
  if (isNaN(activityStart) || isNaN(activityEnd)) {
    return { status: "invalidDate", message: "Invalid activity date." };
  }
  if (!forecastStartDate || !forecastEndDate) {
    return { status: "requestForecast", message: "No forecast data yet." };
  }

  // Derived values
  const maxForecastEnd = new Date(
    today.getTime() + maxForecastDays * MS_PER_DAY
  );
  maxForecastEnd.setHours(0, 0, 0, 0);

  const daysBeyondForecast = Math.ceil(
    (activityEnd - forecastEnd) / MS_PER_DAY
  );
  
  // CASE 1: activity is in the past
  if (activityEnd < today) {
    return {
      status: "pastActivity",
      message: "This activity has already ended.",
    };
  }

  // CASE 2: activity completely within forecast range → reuse data
  if (activityStart >= forecastStart && activityEnd <= forecastEnd) {
    return {
      status: "trimForecast",
      message:
        "Activity range is within the current forecast data. Reuse existing forecast.",
    };
  }

  // CASE 3: activity extends beyond forecast, but still within max API limit
  if (activityStart < forecastStart || (activityEnd > forecastEnd && activityEnd <= maxForecastEnd)) {
    return {
      status: "extendForecast",
      message: `Activity extends ${daysBeyondForecast} day(s) beyond current forecast. Extend forecast (still within ${maxForecastDays}-day limit).`,
      daysBeyondForecast,
    };
  }

  // CASE 4: activity exceeds API max range
  if (activityEnd > maxForecastEnd) {
    return {
      status: "beyondForecast",
      message: `Forecast data is only available up to ${maxForecastDays} day(s) from today. Activity extends ${daysBeyondForecast} day(s) beyond available forecast.`,
      daysBeyondForecast,
    };
  }

  // CASE 5: forecast missing or expired
  if (forecastEnd < today) {
    return {
      status: "requestForecast",
      message: "Forecast is outdated or missing. Request new data.",
    };
  }

  // Fallback
  return {
    status: "unknown",
    message: "Unable to determine forecast status.",
  };
}

// context-aware mapper that returns spam boolean + helpful info
export function forecastSpam(
  activityStartDate,
  activityLastDate,
  forecastStartDate,
  forecastLastDate,
  context = "form"
) {
  console.log(
    `activityLastDate: ${activityLastDate}; forecastLastDate: ${forecastLastDate}; context: ${context}`
  );
  const res = checkForecastStatus(
    activityStartDate,
    activityLastDate,
    forecastStartDate,
    forecastLastDate
  );
  console.log(`res.status: ${res.status}`);

  switch (res.status) {
    case "requestForecast":
      return { spam: false, status: res.status, message: res.message };

    case "trimForecast":
      // forecast has extra days after activity end — always trim, not spam
      console.log("✅ Using cached forecast (trimForecast)");
      return {
        spam: true,
        status: res.status,
        message: res.message,
      };

    case "extendForecast":
      return { spam: false, status: res.status, message: res.message };

    case "beyondForecast":
      return {
        spam: true,
        status: res.status,
        message: res.message,
      };

    case "pastActivity":
      return { spam: true, status: res.status, message: res.message };

    default:
      return { spam: false, status: res.status, message: res.message };
  }
}
