// src/components/UnitToggle.jsx
// Component to toggle between Celsius and Fahrenheit

export default function UnitToggle({ unit, onToggle, darkMode }) {
  return (
    <button
      onClick={onToggle}
      className={`px-3 py-2 rounded-lg font-semibold transition transform hover:scale-105 ${
        darkMode
          ? 'bg-gray-700 text-white hover:bg-gray-600'
          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
      }`}
      title={`Switch to ${unit === 'metric' ? 'Fahrenheit' : 'Celsius'}`}
    >
      {unit === 'metric' ? '°C' : '°F'}
    </button>
  )
}
