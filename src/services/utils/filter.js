export const filterForecastByDateRange1 = (data, startDate, startTime, endDate, endTime) => {
  const start = new Date(`${startDate}T${startTime}`);
  const end = new Date(`${endDate}T${endTime}`);
  console.log(data);
  console.log(`startDate: ${startDate}, startTime: ${startTime}, endDate: ${endDate}, endTime: ${endTime}`);

  // ✅ Add tolerance (±90 mins around selected range)
  const TOLERANCE_MINUTES = 90;
  const startWithTolerance = new Date(start.getTime() - TOLERANCE_MINUTES * 60 * 1000);
  const endWithTolerance = new Date(end.getTime() + TOLERANCE_MINUTES * 60 * 1000);

  const filtered = data.list.filter((item) => {
    const forecastTime = new Date(item.dt_txt);
    return forecastTime >= startWithTolerance && forecastTime <= endWithTolerance;
  });
  // const filtered = data.list.filter((item) => {
  //   const forecastTime = new Date(item.dt_txt);
  //   return forecastTime <= endWithTolerance;
  // });
  console.log("Filtered forecast count:", filtered.length);

  if (filtered.length === 0) {
    return { hasForecast: false, details: [] };
  }

  return { hasForecast: true, details: filtered };
};

export const filterForecastByDateRange = (data, startDate, startTime, endDate, endTime) => {
  const start = new Date(`${startDate}T${startTime}`);
  const end = new Date(`${endDate}T${endTime}`);
  console.log(data);
  console.log(`startDate: ${startDate}, startTime: ${startTime}, endDate: ${endDate}, endTime: ${endTime}`);

  // ✅ Add tolerance (±90 mins around selected range)
  const TOLERANCE_MINUTES = 90;
  const startWithTolerance = new Date(start.getTime() - TOLERANCE_MINUTES * 60 * 1000);
  const endWithTolerance = new Date(end.getTime() + TOLERANCE_MINUTES * 60 * 1000);

  console.log(`Start with tolerance: ${startWithTolerance}`);
  console.log(`End with tolerance: ${endWithTolerance}`);
  const filtered = data.filter((item) => {
    const forecastTime = new Date(item.time);
    return forecastTime >= startWithTolerance && forecastTime <= endWithTolerance;
  });
  // const filtered = data.list.filter((item) => {
  //   const forecastTime = new Date(item.dt_txt);
  //   return forecastTime <= endWithTolerance;
  // });
  console.log("Filtered forecast count:", filtered.length);

  if (filtered.length === 0) {
    return { hasForecast: false, details: [] };
  }

  return { hasForecast: true, details: filtered };
};