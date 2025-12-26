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
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <form onSubmit={handleSubmit} className="flex gap-2">
        {/* Input field where user types the city name */}
        <input
          type="text"
          placeholder="Enter city name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Submit button */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition"
        >
          Search
        </button>
      </form>
    </div>
  )
}
