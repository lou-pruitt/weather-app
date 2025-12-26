// src/components/WeatherDisplay.jsx
// This component displays the weather data for a city

import { getWeatherIcon } from '../utils/weatherIcons'

export default function WeatherDisplay({ weatherData, loading, error }) {
  // Show loading message while fetching data
  if (loading) {
    return (
      <div className="text-center text-white text-lg">
        Loading weather data...
      </div>
    )
  }

  // Show error message if something went wrong
  if (error) {
    return (
      <div className="text-center text-red-200 text-lg">
        Error: {error}
      </div>
    )
  }

  // Show this message if no city has been searched yet
  if (!weatherData) {
    return (
      <div className="text-center text-white text-lg">
        Search for a city to see the weather
      </div>
    )
  }

  // If we have weatherData, display it
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      {/* City name */}
      <h2 className="text-3xl font-bold text-gray-800 mb-2">
        {weatherData.city}, {weatherData.country}
      </h2>

      {/* Weather icon and description */}
      <div className="flex items-center gap-4 mb-4">
        {/* Weather icon - gets the emoji based on the weather description */}
        <div className="text-6xl">
          {getWeatherIcon(weatherData.description)}
        </div>
        
        {/* Weather description text */}
        <p className="text-gray-600 text-lg capitalize">
          {weatherData.description}
        </p>
      </div>

      {/* Temperature */}
      <div className="text-5xl font-bold text-blue-500 mb-4">
        {Math.round(weatherData.temperature)}°C
      </div>

      {/* Other weather details */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-50 p-4 rounded">
          <p className="text-gray-600">Feels Like</p>
          <p className="text-2xl font-bold text-gray-800">
            {Math.round(weatherData.feelsLike)}°C
          </p>
        </div>

        <div className="bg-blue-50 p-4 rounded">
          <p className="text-gray-600">Humidity</p>
          <p className="text-2xl font-bold text-gray-800">
            {weatherData.humidity}%
          </p>
        </div>

        <div className="bg-blue-50 p-4 rounded">
          <p className="text-gray-600">Wind Speed</p>
          <p className="text-2xl font-bold text-gray-800">
            {weatherData.windSpeed} m/s
          </p>
        </div>

        <div className="bg-blue-50 p-4 rounded">
          <p className="text-gray-600">Pressure</p>
          <p className="text-2xl font-bold text-gray-800">
            {weatherData.pressure} mb
          </p>
        </div>
      </div>
    </div>
  )
}
