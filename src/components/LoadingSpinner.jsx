// src/components/LoadingSpinner.jsx
// A nice loading animation shown while fetching weather data

export default function LoadingSpinner({ darkMode }) {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      {/* Animated spinner icon */}
      <div className="relative w-16 h-16 mb-4">
        <div className={`absolute inset-0 rounded-full border-4 ${
          darkMode ? 'border-blue-900' : 'border-blue-200'
        }`}></div>
        <div className={`absolute inset-0 rounded-full border-4 border-transparent border-t-${
          darkMode ? 'blue-400' : 'blue-500'
        } animate-spin`}></div>
      </div>
      
      {/* Loading text */}
      <p className={`text-lg font-semibold animate-pulse ${
        darkMode ? 'text-gray-300' : 'text-white'
      }`}>
        Loading weather data...
      </p>
    </div>
  )
}
