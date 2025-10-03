// services/utils/validation.js

export function validateActivity({
  location,
  startDate,
  endDate,
  startTime,
  endTime,
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

  return { valid: true };
}
