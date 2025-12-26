// src/components/FavoritesList.jsx
// This component displays saved favorite cities that user can quickly search again

export default function FavoritesList({ favorites, onFavoriteClick, onRemoveFavorite }) {
  // If no favorites exist, show a message
  if (favorites.length === 0) {
    return (
      <div className="mt-6 text-center text-white">
        <p>No favorite cities yet. Search for a city and add it to favorites!</p>
      </div>
    )
  }

  return (
    <div className="mt-6 bg-white rounded-lg shadow-md p-6">
      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        ⭐ Favorite Cities
      </h2>

      {/* Grid of favorite cities */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {favorites.map((city, index) => (
          <div
            key={index}
            className="bg-blue-50 rounded-lg p-3 cursor-pointer hover:bg-blue-100 transition"
          >
            {/* City button - click to search */}
            <button
              onClick={() => onFavoriteClick(city)}
              className="w-full text-left text-sm font-semibold text-gray-800 hover:text-blue-600 mb-2"
            >
              {city}
            </button>

            {/* Remove button - delete from favorites */}
            <button
              onClick={() => onRemoveFavorite(city)}
              className="w-full text-xs text-red-500 hover:text-red-700 font-semibold"
            >
              Remove ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
