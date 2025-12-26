// src/components/WeatherDisplay.jsx
// This component displays the weather data for a city

import { getWeatherIcon } from '../utils/weatherIcons'
import LoadingSpinner from './LoadingSpinner'

export default function WeatherDisplay({ weatherData, loading, error, onAddFavorite, isFavorite }) {
  // Show loading spinner while fetching data
  if (loading) {
    return <LoadingSpinner />
  }

  // Show error message with better styling
  if (error) {
    return (
      <div className="mt-6 bg-red-50 border-l-4 border-red-500 p-6 rounded-lg max-w-md mx-auto animate-fade-in">
        <div className="flex items-center">
          <span className="text-3xl mr-4">⚠️</span>
          <div>
            <p className="text-red-800 font-semibold text-lg">Error</p>
            <p className="text-red-700">{error}</p>
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
        <p className="text-white text-xl font-semibold">
          Search for a city to see the weather
        </p>
        <p className="text-blue-100 mt-2">
          Try London, New York, Tokyo, or any city in the world!
        </p>
      </div>
    )
  }

  // If we have weatherData, display it with animations
  return (
    <div className="mt-8 bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-2xl p-8 max-w-2xl mx-auto animate-fade-in">
      {/* City name with favorite button */}
      <div className="flex items-center justify-between mb-6 pb-6 border-b-2 border-blue-100">
        <div>
          <h2 className="text-4xl font-bold text-gray-800">
            {weatherData.city}
          </h2>
          <p className="text-gray-500 text-lg">{weatherData.country}</p>
        </div>
        
        {/* Add/Remove favorite button with animation */}
        <button
          onClick={() => onAddFavorite(weatherData.city)}
          className={`text-5xl transition transform hover:scale-125 ${
            isFavorite 
              ? 'text-red-500 animate-pulse' 
              : 'text-gray-300 hover:text-yellow-400'
          }`}
          title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>

      {/* Weather icon and description */}
      <div className="flex items-center gap-6 mb-8">
        {/* Weather icon - gets the emoji based on the weather description */}
        <div className="text-8xl animate-bounce" style={{ animationDelay: '0s' }}>
          {getWeatherIcon(weatherData.description)}
        </div>
        
        {/* Weather description text */}
        <div>
          <p className="text-gray-600 text-2xl capitalize font-semibold">
            {weatherData.description}
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Current conditions in {weatherData.city}
          </p>
        </div>
      </div>

      {/* Temperature - large and prominent */}
      <div className="mb-8 text-center bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg p-6 text-white">
        <p className="text-sm font-semibold mb-2 opacity-90">Temperature</p>
        <div className="text-6xl font-bold">
          {Math.round(weatherData.temperature)}°C
        </div>
        <p className="text-sm mt-2 opacity-90">
          Feels like {Math.round(weatherData.feelsLike)}°C
        </p>
      </div>

      {/* Weather details grid */}
      <div className="grid grid-cols-2 gap-4">
        {/* Humidity */}
        <div className="bg-blue-50 hover:bg-blue-100 p-5 rounded-lg transition transform hover:scale-105">
          <p className="text-gray-600 text-sm font-semibold mb-2">💧 Humidity</p>
          <p className="text-3xl font-bold text-blue-600">
            {weatherData.humidity}%
          </p>
        </div>

        {/* Wind Speed */}
        <div className="bg-blue-50 hover:bg-blue-100 p-5 rounded-lg transition transform hover:scale-105">
          <p className="text-gray-600 text-sm font-semibold mb-2">💨 Wind Speed</p>
          <p className="text-3xl font-bold text-blue-600">
            {weatherData.windSpeed} m/s
          </p>
        </div>

        {/* Pressure */}
        <div className="bg-blue-50 hover:bg-blue-100 p-5 rounded-lg transition transform hover:scale-105">
          <p className="text-gray-600 text-sm font-semibold mb-2">📊 Pressure</p>
          <p className="text-3xl font-bold text-blue-600">
            {weatherData.pressure} mb
          </p>
        </div>

        {/* Feels Like */}
        <div className="bg-blue-50 hover:bg-blue-100 p-5 rounded-lg transition transform hover:scale-105">
          <p className="text-gray-600 text-sm font-semibold mb-2">🌡️ Feels Like</p>
          <p className="text-3xl font-bold text-blue-600">
            {Math.round(weatherData.feelsLike)}°C
          </p>
        </div>
      </div>
    </div>
  )
}
