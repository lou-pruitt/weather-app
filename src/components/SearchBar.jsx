// src/components/SearchBar.jsx
// This component provides an input field where users can search for a city

import { useState } from 'react'

export default function SearchBar({ onSearch, darkMode }) {
  // useState hook: Manages the input field value
  // searchTerm = current value in input
  // setSearchTerm = function to update that value
  const [searchTerm, setSearchTerm] = useState('')

  // handleSubmit: Called when user submits the form (presses Enter or clicks button)
  const handleSubmit = (e) => {
    // preventDefault: Stop the page from reloading (default form behavior)
    e.preventDefault()

    // If user typed something, call the onSearch function passed from parent
    if (searchTerm.trim()) {
      // onSearch is a prop (passed from App.jsx)
      // It will pass the city name up to the parent component
      onSearch(searchTerm)

      // Clear the input field after searching
      setSearchTerm('')
    }
  }

  return (
    <div className={`${
      darkMode
        ? 'bg-gray-800 border border-gray-700'
        : 'bg-white'
    } rounded-xl shadow-lg p-6 mb-8 animate-fade-in transition-colors duration-500`}>
      <form onSubmit={handleSubmit} className="flex gap-3">
        {/* Input field where user types the city name */}
        <input
          type="text"
          placeholder="Enter city name... (e.g., London, Tokyo, NYC)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`flex-1 px-5 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition placeholder-gray-400 ${
            darkMode
              ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-400 focus:ring-blue-400/30'
              : 'bg-white border-gray-200 text-gray-800 focus:border-blue-500 focus:ring-blue-200'
          }`}
          autoFocus
        />

        {/* Submit button with hover effects */}
        <button
          type="submit"
          className={`px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105 active:scale-95 shadow-md ${
            darkMode
              ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white'
              : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white'
          }`}
        >
          🔍 Search
        </button>
      </form>
    </div>
  )
}
