import {  filterForecastByDateRange1 } from "../utils/filter";

// services/weatherService.js
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export async function getCoordinates(location) {
  console.log(API_KEY);
  const res = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(
      location
    )}&limit=1&appid=${API_KEY}`
  );
  const data = await res.json();
  console.log(data);
  if (!data || data.length === 0) {
    throw new Error("Location not found");
  }
  return { lat: data[0].lat, lon: data[0].lon };
}

export async function getForecast(lat, lon, startDate, startTime, endDate, endTime) {
  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
  console.log(API_KEY);
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );
  const data = await res.json();

  if (!data.list) throw new Error("No forecast data available");

  const filteredResult = filterForecastByDateRange1(data, startDate, startTime, endDate, endTime);
  console.log(filteredResult);
  if (!filteredResult.hasForecast) {
    return { type: "none", details: [] };
  }

  // Build detail list
  const details = filteredResult.details.map((item) => ({
    time: item.dt_txt,
    condition: item.weather[0].main,
    description: item.weather[0].description,
    temp: Math.round(item.main.temp),
    humidity: Math.round(item.main.humidity),
  }));

  return buildForecastResponse(startDate, endDate, details);
}

export function buildForecastResponse(startDate, endDate, details){
  const isSingleDay = startDate === endDate;

  if (isSingleDay) {
    return { type: "single-day", details };
  } else {
    // Group by day for summary
    const byDay = {};
    details.forEach((d) => {
      const date = d.time.split(" ")[0];
      if (!byDay[date]) byDay[date] = [];
      byDay[date].push(d);
    });

    const summary = Object.entries(byDay).map(([date, forecasts]) => {
      const conditions = {};
      let tempSum = 0, humSum = 0;
      forecasts.forEach((f) => {
        conditions[f.condition] = (conditions[f.condition] || 0) + 1;
        tempSum += f.temp;
        humSum += f.humidity;
      });
      const dominant = Object.entries(conditions).sort((a, b) => b[1] - a[1])[0][0];
      return {
        date,
        condition: dominant,
        avgTemp: Math.round(tempSum / forecasts.length),
        avgHumidity: Math.round(humSum / forecasts.length),
      };
    });

    return { type: "multi-day", summary, details };
  }
}