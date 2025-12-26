// src/components/ForecastCard.jsx
// This component displays a single day's forecast

import { getWeatherIcon } from '../utils/weatherIcons'

export default function ForecastCard({ date, temperature, description, darkMode }) {
  // Convert the date string to a readable format
  // Example: "2025-12-26" becomes "Thu, Dec 26"
  const formatDate = (dateString) => {
    const dateObj = new Date(dateString)
    const options = { weekday: 'short', month: 'short', day: 'numeric' }
    return dateObj.toLocaleDateString('en-US', options)
  }

  return (
    <div className={`w-full rounded-lg p-3 transition transform hover:scale-105 ${
      darkMode
        ? 'bg-gray-700 hover:bg-gray-600'
        : 'bg-white hover:bg-blue-50'
    } shadow-md`}>
      {/* Date */}
      <p className={`text-xs font-semibold text-center mb-2 ${
        darkMode ? 'text-gray-300' : 'text-gray-600'
      }`}>
        {formatDate(date)}
      </p>

      {/* Weather icon */}
      <div className="text-4xl text-center mb-2">
        {getWeatherIcon(description)}
      </div>

      {/* Temperature */}
      <p className={`text-xl font-bold text-center ${
        darkMode ? 'text-blue-400' : 'text-blue-600'
      }`}>
        {Math.round(temperature)}°C
      </p>

      {/* Weather description */}
      <p className={`text-xs text-center mt-1 capitalize ${
        darkMode ? 'text-gray-400' : 'text-gray-500'
      }`}>
        {description}
      </p>
    </div>
  )
}
