// src/utils/weatherIcons.js
// Maps OpenWeatherMap weather conditions to emoji icons

export const getWeatherIcon = (description) => {
  // Convert description to lowercase for case-insensitive matching
  const desc = description.toLowerCase()

  // Match keywords in the description and return appropriate emoji
  if (desc.includes('clear') || desc.includes('sunny')) return '☀️'
  if (desc.includes('cloud')) return '☁️'
  if (desc.includes('rain')) return '🌧️'
  if (desc.includes('thunderstorm')) return '⛈️'
  if (desc.includes('snow')) return '❄️'
  if (desc.includes('mist') || desc.includes('fog')) return '🌫️'
  if (desc.includes('wind')) return '💨'
  if (desc.includes('drizzle')) return '🌦️'

  // Default icon if no match
  return '🌤️'
}

// Map of common OpenWeatherMap conditions to icons
export const weatherConditions = {
  '01d': '☀️', // clear sky day
  '01n': '🌙', // clear sky night
  '02d': '⛅', // few clouds day
  '02n': '☁️', // few clouds night
  '03d': '☁️', // scattered clouds day
  '03n': '☁️', // scattered clouds night
  '04d': '☁️', // broken clouds day
  '04n': '☁️', // broken clouds night
  '09d': '🌦️', // shower rain day
  '09n': '🌦️', // shower rain night
  '10d': '🌧️', // rain day
  '10n': '🌧️', // rain night
  '11d': '⛈️', // thunderstorm day
  '11n': '⛈️', // thunderstorm night
  '13d': '❄️', // snow day
  '13n': '❄️', // snow night
  '50d': '🌫️', // mist day
  '50n': '🌫️', // mist night
}
