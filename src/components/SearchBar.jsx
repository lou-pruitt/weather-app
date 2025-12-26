// src/components/SearchBar.jsx
// This component provides an input field where users can search for a city

import { useState } from 'react'

export default function SearchBar({ onSearch }) {
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
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8 animate-fade-in">
      <form onSubmit={handleSubmit} className="flex gap-3">
        {/* Input field where user types the city name */}
        <input
          type="text"
          placeholder="Enter city name... (e.g., London, Tokyo, NYC)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-5 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition placeholder-gray-400 text-gray-800"
          autoFocus
        />

        {/* Submit button with hover effects */}
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105 active:scale-95 shadow-md"
        >
          🔍 Search
        </button>
      </form>
    </div>
  )
}
