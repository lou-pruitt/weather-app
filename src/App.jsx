// src/App.jsx - The main App component
// This is where all other components get rendered

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-600">
      <header className="bg-white shadow">
        <h1 className="text-3xl font-bold text-gray-800 p-6">
          🌤️ Weather App
        </h1>
      </header>
      
      <main className="container mx-auto p-6">
        <p className="text-white text-lg">
          Welcome! This is where our weather app will live.
        </p>
      </main>
    </div>
  )
}
