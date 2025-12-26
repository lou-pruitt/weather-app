// src/App.jsx - The main App component
// This is where all other components get rendered and where we manage data

import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import WeatherDisplay from './components/WeatherDisplay'
import FavoritesList from './components/FavoritesList'

export default function App() {
  // State variables to manage weather data
  // weatherData: Stores the weather information we get from the API
  // loading: True while we're fetching data from API
  // error: Stores any error messages if something goes wrong
  // favorites: Array of favorite cities saved by user
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [favorites, setFavorites] = useState([])

  // useEffect: Loads favorites from localStorage when component mounts
  // localStorage persists data even after browser closes
  useEffect(() => {
    const savedFavorites = localStorage.getItem('weatherAppFavorites')
    if (savedFavorites) {
      // Parse the JSON string back into an array
      setFavorites(JSON.parse(savedFavorites))
    }
  }, [])

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
      
      // Build the URL for the API request
      // This URL gets weather data for the city the user searched
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

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
    } catch (err) {
      // If anything goes wrong, show an error message
      setError(err.message)
      setWeatherData(null)
    } finally {
      // Whether successful or not, stop the loading animation
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-600">
      {/* Header section */}
      <header className="bg-white shadow">
        <h1 className="text-3xl font-bold text-gray-800 p-6">
          🌤️ Weather App
        </h1>
      </header>
      
      {/* Main content area */}
      <main className="container mx-auto p-6">
        {/* SearchBar component: User searches for a city */}
        {/* onSearch prop passes the handleSearch function to SearchBar */}
        <SearchBar onSearch={handleSearch} />

        {/* WeatherDisplay component: Shows the weather results */}
        {/* Props pass the data and states we defined above */}
        <WeatherDisplay 
          weatherData={weatherData}
          loading={loading}
          error={error}
          onAddFavorite={handleAddFavorite}
          isFavorite={weatherData && favorites.includes(weatherData.city)}
        />

        {/* FavoritesList component: Shows user's favorite cities */}
        {/* User can click favorites to quickly search or remove them */}
        <FavoritesList 
          favorites={favorites}
          onFavoriteClick={handleFavoriteClick}
          onRemoveFavorite={handleRemoveFavorite}
        />
      </main>
    </div>
  )
}
