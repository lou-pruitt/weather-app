// src/App.jsx - The main App component
// This is where all other components get rendered and where we manage data

import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import WeatherDisplay from './components/WeatherDisplay'
import FavoritesList from './components/FavoritesList'
import DarkModeToggle from './components/DarkModeToggle'
import UnitToggle from './components/UnitToggle'
import ForecastCard from './components/ForecastCard'
import { useDarkMode } from './hooks/useDarkMode'

export default function App() {
  // Use the dark mode hook to manage dark mode state
  const { darkMode, toggleDarkMode, mounted } = useDarkMode()

  // State variables to manage weather data
  // weatherData: Stores the weather information we get from the API
  // loading: True while we're fetching data from API
  // error: Stores any error messages if something goes wrong
  // favorites: Array of favorite cities saved by user
  // forecastData: Array of forecast data for next 5 days
  // unit: 'metric' for Celsius or 'imperial' for Fahrenheit
  // currentCity: Store the current city name to re-fetch when unit changes
  const [weatherData, setWeatherData] = useState(null)
  const [forecastData, setForecastData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [favorites, setFavorites] = useState([])
  const [unit, setUnit] = useState('metric') // default to Celsius
  const [currentCity, setCurrentCity] = useState(null)

  // useEffect: Loads favorites from localStorage when component mounts
  // localStorage persists data even after browser closes
  useEffect(() => {
    const savedFavorites = localStorage.getItem('weatherAppFavorites')
    if (savedFavorites) {
      // Parse the JSON string back into an array
      setFavorites(JSON.parse(savedFavorites))
    }
  }, [])

  // useEffect: Re-fetch weather data when unit changes (if we have a current city)
  // This ensures temperatures update when user toggles between C and F
  useEffect(() => {
    if (currentCity) {
      handleSearch(currentCity)
    }
  }, [unit])

  // saveFavoritesToStorage: Helper function to save favorites to localStorage
  const saveFavoritesToStorage = (updatedFavorites) => {
    // Convert array to JSON string and save to localStorage
    localStorage.setItem('weatherAppFavorites', JSON.stringify(updatedFavorites))
  }

  // handleAddFavorite: Add or remove a city from favorites
  const handleAddFavorite = (city) => {
    // Check if city is already in favorites
    if (favorites.includes(city)) {
      // Remove it if already there
      const updated = favorites.filter(fav => fav !== city)
      setFavorites(updated)
      saveFavoritesToStorage(updated)
    } else {
      // Add it if not there
      const updated = [...favorites, city]
      setFavorites(updated)
      saveFavoritesToStorage(updated)
    }
  }

  // handleFavoriteClick: When user clicks a favorite city, search for it
  const handleFavoriteClick = (city) => {
    handleSearch(city)
  }

  // handleRemoveFavorite: Remove a city from favorites
  const handleRemoveFavorite = (city) => {
    const updated = favorites.filter(fav => fav !== city)
    setFavorites(updated)
    saveFavoritesToStorage(updated)
  }

  // handleSearch: Called when user searches for a city
  // This function fetches weather data from OpenWeatherMap API
  const handleSearch = async (city) => {
    try {
      // Set loading to true so UI shows "Loading..." message
      setLoading(true)
      // Clear any previous error messages
      setError(null)

      // API key for OpenWeatherMap (free tier)
      // You can get one at: https://openweathermap.org/api
      const API_KEY = '26aae617d130745137c1f25d772b1cb8'
      
      // Format city name for API: Replace ", CA" with ",CA,US" for better results
      // OpenWeatherMap prefers format: "City,StateCode,CountryCode"
      let formattedCity = city.trim()
      if (formattedCity.includes(', CA')) {
        formattedCity = formattedCity.replace(', CA', ',CA,US')
      } else if (formattedCity.includes(',CA')) {
        formattedCity = formattedCity.replace(',CA', ',CA,US')
      }
      
      // Build the URL for the API request
      // encodeURIComponent ensures special characters and spaces are properly encoded
      // units parameter: 'metric' for Celsius, 'imperial' for Fahrenheit
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(formattedCity)}&appid=${API_KEY}&units=${unit}`

      // Fetch: Makes an HTTP request to the API
      // await: Wait for the response to come back
      const response = await fetch(url)

      // Check if the response was successful
      if (!response.ok) {
        throw new Error('City not found')
      }

      // Convert the response to JSON (JavaScript Object)
      const data = await response.json()

      // Extract the weather information we need and store it
      // This transforms the API response into data our component can use
      setWeatherData({
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        feelsLike: data.main.feels_like,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        pressure: data.main.pressure
      })
      
      // Store the city name so we can re-fetch when unit changes
      setCurrentCity(city)

      // Now fetch the 5-day forecast for the same city
      // This API returns weather forecasts every 3 hours for 5 days
      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(formattedCity)}&appid=${API_KEY}&units=${unit}`
      const forecastResponse = await fetch(forecastUrl)
      
      if (forecastResponse.ok) {
        const forecastData = await forecastResponse.json()
        
        // Process forecast data: Get one forecast per day at noon (12:00)
        // The API gives data every 3 hours, so we filter for noon readings
        const dailyForecasts = forecastData.list.filter(item => {
          // item.dt_txt looks like "2025-12-26 12:00:00"
          // We want to keep only the 12:00:00 entries
          return item.dt_txt.includes('12:00:00')
        }).slice(0, 5) // Get first 5 days
        
        // Transform the data into a simpler format
        const processedForecasts = dailyForecasts.map(item => ({
          date: item.dt_txt.split(' ')[0], // Extract just the date "2025-12-26"
          temperature: item.main.temp,
          description: item.weather[0].description
        }))
        
        setForecastData(processedForecasts)
      }
    } catch (err) {
      // If anything goes wrong, show an error message
      setError(err.message)
      setWeatherData(null)
      setForecastData([])
    } finally {
      // Whether successful or not, stop the loading animation
      setLoading(false)
    }
  }

  // toggleUnit: Switch between Celsius and Fahrenheit
  const toggleUnit = () => {
    setUnit(prevUnit => prevUnit === 'metric' ? 'imperial' : 'metric')
  }

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      darkMode
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
        : 'bg-gradient-to-br from-blue-400 to-blue-600'
    }`}>
      {/* Header section with toggle */}
      <header className={`${
        darkMode ? 'bg-gray-800 border-b border-gray-700' : 'bg-white'
      } shadow transition-colors duration-500`}>
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between">
          <h1 className={`text-3xl font-bold ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}>
            🌤️ Weather App
          </h1>
          
          {/* Toggle buttons for dark mode and temperature unit */}
          <div className="flex items-center gap-2 sm:gap-3">
            {mounted && <UnitToggle unit={unit} onToggle={toggleUnit} darkMode={darkMode} />}
            {mounted && <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode} />}
          </div>
        </div>
      </header>
      
      {/* Main content area */}
      <main className="container mx-auto p-4 sm:p-6">
        {/* SearchBar component: User searches for a city */}
        {/* onSearch prop passes the handleSearch function to SearchBar */}
        <SearchBar onSearch={handleSearch} darkMode={darkMode} />

        {/* WeatherDisplay component: Shows the weather results */}
        {/* Props pass the data and states we defined above */}
        <WeatherDisplay 
          weatherData={weatherData}
          loading={loading}
          error={error}
          onAddFavorite={handleAddFavorite}
          isFavorite={weatherData && favorites.includes(weatherData.city)}
          darkMode={darkMode}
          unit={unit}
        />

        {/* 5-Day Forecast: Shows weather forecast for next 5 days */}
        {/* Only display if we have forecast data */}
        {forecastData.length > 0 && (
          <div className="mt-6 max-w-2xl mx-auto">
            <h2 className={`text-xl sm:text-2xl font-bold mb-3 ${
              darkMode ? 'text-white' : 'text-white'
            }`}>
              5-Day Forecast
            </h2>
            {/* Grid layout for forecast cards - wraps on smaller screens */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3">
              {forecastData.map((day, index) => (
                <ForecastCard
                  key={index}
                  date={day.date}
                  temperature={day.temperature}
                  description={day.description}
                  darkMode={darkMode}
                  unit={unit}
                />
              ))}
            </div>
          </div>
        )}

        {/* FavoritesList component: Shows user's favorite cities */}
        {/* User can click favorites to quickly search or remove them */}
        <FavoritesList 
          favorites={favorites}
          onFavoriteClick={handleFavoriteClick}
          onRemoveFavorite={handleRemoveFavorite}
          darkMode={darkMode}
        />
      </main>
    </div>
  )
}
