// src/components/DarkModeToggle.jsx
// Button to toggle between dark and light mode

export default function DarkModeToggle({ darkMode, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className={`p-2 rounded-lg transition transform hover:scale-110 ${
        darkMode
          ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400'
          : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
      }`}
      title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {/* Sun icon for light mode */}
      {darkMode ? '☀️' : '🌙'}
    </button>
  )
}
