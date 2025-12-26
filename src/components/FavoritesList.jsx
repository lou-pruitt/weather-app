// src/components/FavoritesList.jsx
// This component displays saved favorite cities that user can quickly search again

export default function FavoritesList({ favorites, onFavoriteClick, onRemoveFavorite, darkMode }) {
  // If no favorites exist, show a message
  if (favorites.length === 0) {
    return (
      <div className={`mt-6 text-center ${
        darkMode ? 'text-gray-400' : 'text-white'
      }`}>
        <p>No favorite cities yet. Search for a city and add it to favorites!</p>
      </div>
    )
  }

  return (
    <div className={`mt-6 rounded-lg shadow-md p-6 transition-colors duration-500 ${
      darkMode
        ? 'bg-gray-800 border border-gray-700'
        : 'bg-white'
    }`}>
      {/* Title */}
      <h2 className={`text-2xl font-bold mb-4 ${
        darkMode ? 'text-white' : 'text-gray-800'
      }`}>
        ⭐ Favorite Cities
      </h2>

      {/* Grid of favorite cities */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {favorites.map((city, index) => (
          <div
            key={index}
            className={`rounded-lg p-3 cursor-pointer transition ${
              darkMode
                ? 'bg-gray-700 hover:bg-gray-600'
                : 'bg-blue-50 hover:bg-blue-100'
            }`}
          >
            {/* City button - click to search */}
            <button
              onClick={() => onFavoriteClick(city)}
              className={`w-full text-left text-sm font-semibold mb-2 hover:${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              } ${
                darkMode ? 'text-gray-200' : 'text-gray-800'
              }`}
            >
              {city}
            </button>

            {/* Remove button - delete from favorites */}
            <button
              onClick={() => onRemoveFavorite(city)}
              className="w-full text-xs font-semibold text-red-500 hover:text-red-700"
            >
              Remove ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
