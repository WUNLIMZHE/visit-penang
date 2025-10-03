import PropTypes from "prop-types";

const Forecast = ({ formattedTime, description, temp, humidity, condition, className}) => {
  return (
    <div
      key={formattedTime}
      className={`flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 shadow-sm ${className}`}
    >
      <div className="flex flex-col">
        <span className="font-semibold text-stone-700">{formattedTime}</span>
        <span className="text-sm text-stone-500">{description}</span>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-lg font-bold text-blue-600">{temp}°C</span>
        <span className="text-sm text-stone-600">💧 {humidity}%</span>
        <span className="text-md font-bold">
          {condition === "Rain" ? "🌧️" : condition === "Clouds" ? "☁️" : "☀️"}
        </span>
      </div>
    </div>
  );
};

export default Forecast;

Forecast.propTypes = {
  formattedTime: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  temp: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  humidity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  condition: PropTypes.string.isRequired,
  className: PropTypes.string,
};