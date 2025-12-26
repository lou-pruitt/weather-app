// src/components/WeatherDisplay.jsx
// This component displays the weather data for a city

import { getWeatherIcon } from '../utils/weatherIcons'
import LoadingSpinner from './LoadingSpinner'

export default function WeatherDisplay({ weatherData, loading, error, onAddFavorite, isFavorite, darkMode, unit }) {
  // Get the temperature unit symbol based on metric or imperial
  const unitSymbol = unit === 'metric' ? '°C' : '°F'
  
  // Show loading spinner while fetching data
  if (loading) {
    return <LoadingSpinner darkMode={darkMode} />
  }

  // Show error message with better styling
  if (error) {
    return (
      <div className={`mt-6 border-l-4 p-6 rounded-lg max-w-md mx-auto animate-fade-in ${
        darkMode
          ? 'bg-red-900/30 border-red-500 text-red-200'
          : 'bg-red-50 border-red-500 text-red-700'
      }`}>
        <div className="flex items-center">
          <span className="text-3xl mr-4">⚠️</span>
          <div>
            <p className="font-semibold text-lg">Error</p>
            <p>{error}</p>
          </div>
        </div>
      </div>
    )
  }

  // Show this message if no city has been searched yet
  if (!weatherData) {
    return (
      <div className="mt-8 text-center">
        <div className="text-6xl mb-4">🔍</div>
        <p className={`text-xl font-semibold ${
          darkMode ? 'text-gray-200' : 'text-white'
        }`}>
          Search for a city to see the weather
        </p>
        <p className={`mt-2 ${
          darkMode ? 'text-gray-400' : 'text-blue-100'
        }`}>
          Try London, New York, Tokyo, or any city in the world!
        </p>
      </div>
    )
  }

  // If we have weatherData, display it with animations
  return (
    <div className={`mt-4 sm:mt-6 rounded-xl shadow-2xl p-3 sm:p-6 max-w-2xl mx-auto animate-fade-in transition-colors duration-500 ${
      darkMode
        ? 'bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-600'
        : 'bg-gradient-to-br from-white to-blue-50'
    }`}>
      {/* City name with favorite button */}
      <div className={`flex items-start sm:items-center justify-between mb-3 sm:mb-4 pb-3 sm:pb-4 border-b-2 gap-3 ${
        darkMode ? 'border-gray-600' : 'border-blue-100'
      }`}>
        <div className="min-w-0">
          <h2 className={`text-2xl sm:text-4xl font-bold ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}>
            {weatherData.city}
          </h2>
          <p className={`text-sm sm:text-lg ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            {weatherData.country}
          </p>
        </div>
        
        {/* Add/Remove favorite button with animation */}
        <button
          onClick={() => onAddFavorite(weatherData.city)}
          className={`text-4xl sm:text-5xl transition transform hover:scale-125 flex-shrink-0 ${
            isFavorite 
              ? 'text-red-500 animate-pulse' 
              : darkMode
              ? 'text-gray-500 hover:text-yellow-400'
              : 'text-gray-300 hover:text-yellow-400'
          }`}
          title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>

      {/* Weather icon and description */}
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
        {/* Weather icon - gets the emoji based on the weather description */}
        <div className="text-5xl sm:text-6xl flex-shrink-0 animate-bounce" style={{ animationDelay: '0s' }}>
          {getWeatherIcon(weatherData.description)}
        </div>
        
        {/* Weather description text */}
        <div>
          <p className={`text-xl sm:text-2xl capitalize font-semibold ${
            darkMode ? 'text-gray-200' : 'text-gray-600'
          }`}>
            {weatherData.description}
          </p>
          <p className={`text-xs sm:text-sm mt-2 ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            Current conditions in {weatherData.city}
          </p>
        </div>
      </div>

      {/* Temperature - large and prominent */}
      <div className={`mb-3 sm:mb-4 text-center rounded-lg p-2 sm:p-3 text-white ${
        darkMode
          ? 'bg-gradient-to-r from-blue-700 to-blue-800'
          : 'bg-gradient-to-r from-blue-400 to-blue-600'
      }`}>
        <p className="text-xs font-semibold mb-1 opacity-90">Temperature</p>
        <div className="text-4xl sm:text-5xl font-bold">
          {Math.round(weatherData.temperature)}{unitSymbol}
        </div>
        <p className="text-xs mt-1 opacity-90">
          Feels like {Math.round(weatherData.feelsLike)}{unitSymbol}
        </p>
      </div>

      {/* Weather details grid */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        {/* Humidity */}
        <div className={`p-2 sm:p-3 rounded-lg transition transform hover:scale-105 ${
          darkMode
            ? 'bg-gray-700 hover:bg-gray-600'
            : 'bg-blue-50 hover:bg-blue-100'
        }`}>
          <p className={`text-xs font-semibold mb-1 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            💧 Humidity
          </p>
          <p className={`text-xl sm:text-2xl font-bold ${
            darkMode ? 'text-blue-400' : 'text-blue-600'
          }`}>
            {weatherData.humidity}%
          </p>
        </div>

        {/* Wind Speed */}
        <div className={`p-2 sm:p-3 rounded-lg transition transform hover:scale-105 ${
          darkMode
            ? 'bg-gray-700 hover:bg-gray-600'
            : 'bg-blue-50 hover:bg-blue-100'
        }`}>
          <p className={`text-xs font-semibold mb-1 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            💨 Wind
          </p>
          <p className={`text-xl sm:text-2xl font-bold ${
            darkMode ? 'text-blue-400' : 'text-blue-600'
          }`}>
            {weatherData.windSpeed} m/s
          </p>
        </div>

        {/* Pressure */}
        <div className={`p-2 sm:p-3 rounded-lg transition transform hover:scale-105 ${
          darkMode
            ? 'bg-gray-700 hover:bg-gray-600'
            : 'bg-blue-50 hover:bg-blue-100'
        }`}>
          <p className={`text-xs font-semibold mb-1 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            📊 Pressure
          </p>
          <p className={`text-xl sm:text-2xl font-bold ${
            darkMode ? 'text-blue-400' : 'text-blue-600'
          }`}>
            {weatherData.pressure}
          </p>
        </div>

        {/* Feels Like */}
        <div className={`p-2 sm:p-3 rounded-lg transition transform hover:scale-105 ${
          darkMode
            ? 'bg-gray-700 hover:bg-gray-600'
            : 'bg-blue-50 hover:bg-blue-100'
        }`}>
          <p className={`text-xs font-semibold mb-1 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            🌡️ Feels Like
          </p>
          <p className={`text-xl sm:text-2xl font-bold ${
            darkMode ? 'text-blue-400' : 'text-blue-600'
          }`}>
            {Math.round(weatherData.feelsLike)}{unitSymbol}
          </p>
        </div>
      </div>
    </div>
  )
}
