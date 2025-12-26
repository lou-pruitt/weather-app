# 🌤️ Weather App

A modern, fully-featured weather application built with React, Vite, and Tailwind CSS. Search real-time weather for any city in the world with a beautiful, responsive interface.

**[Live Demo](https://your-deployed-url-here)** | **[GitHub Repo](https://github.com/lou-pruitt/weather-app)**

---

## ✨ Features

- 🔍 **Search Weather** - Find current weather for any city worldwide
- 💾 **Save Favorites** - Save your favorite cities with persistent localStorage
- 🌙 **Dark Mode** - Toggle between light and dark themes (preference saved)
- 📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- ⚡ **Smooth Animations** - Loading spinners and transitions for better UX
- 🎨 **Beautiful UI** - Modern design with Tailwind CSS
- ☁️ **Weather Icons** - Visual emoji icons for weather conditions
- 🚀 **Fast Performance** - Built with Vite for instant development experience

---

## 🛠️ Tech Stack

- **React 18** - Modern UI library with hooks
- **Vite 4** - Lightning-fast build tool
- **Tailwind CSS 3** - Utility-first CSS framework
- **OpenWeatherMap API** - Real-time weather data
- **JavaScript (ES6+)** - Modern JavaScript features

---

## 📋 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Free API key from [OpenWeatherMap](https://openweathermap.org/api)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/lou-pruitt/weather-app.git
cd weather-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Add your API key**
   - Get a free API key from [OpenWeatherMap](https://openweathermap.org/api)
   - Open `src/App.jsx`
   - Replace `'YOUR_API_KEY_HERE'` with your actual API key

4. **Start development server**
```bash
npm run dev
```

5. **Open in browser**
   - Navigate to `http://localhost:5173`
   - Or use your local network IP for mobile testing

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

---

## 🎯 How to Use

1. **Search for a City** - Type any city name in the search bar and press Enter
2. **View Weather** - See current temperature, conditions, humidity, wind speed, and pressure
3. **Add to Favorites** - Click the heart icon (❤️) to save cities
4. **Quick Search** - Click any favorite city to instantly view its weather
5. **Toggle Dark Mode** - Click the sun/moon icon (☀️/🌙) in the header
6. **Mobile Friendly** - App works great on smartphones and tablets

---

## 📁 Project Structure

```
weather-app/
├── src/
│   ├── components/           # React components
│   │   ├── SearchBar.jsx    # Search input component
│   │   ├── WeatherDisplay.jsx # Main weather display
│   │   ├── FavoritesList.jsx # Saved cities list
│   │   ├── LoadingSpinner.jsx # Loading animation
│   │   └── DarkModeToggle.jsx # Theme toggle button
│   ├── hooks/               # Custom React hooks
│   │   └── useDarkMode.js   # Dark mode state management
│   ├── utils/               # Utility functions
│   │   └── weatherIcons.js  # Weather condition icons
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # React entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── index.html             # HTML template
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── package.json           # Dependencies and scripts
```

---

## 🎓 What I Learned

Building this project taught me:
- React state management with `useState` and `useEffect`
- Custom React hooks for reusable logic
- Fetching and handling API data
- localStorage for persistent state
- Tailwind CSS for responsive design
- Mobile-first design approach
- Git workflow with meaningful commits
- Component composition and props

---

## 🚀 Future Improvements

- [ ] 5-day and 16-day forecasts
- [ ] Geolocation to auto-detect user's city
- [ ] Temperature unit toggle (°C/°F)
- [ ] Weather alerts and warnings
- [ ] Air quality index
- [ ] Wind direction with compass
- [ ] Hourly forecast
- [ ] Search history
- [ ] Sunrise/sunset times

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Lou Pruitt** - [GitHub](https://github.com/lou-pruitt) | [Portfolio](#)

---

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for the weather API
- [React](https://react.dev/) documentation
- [Tailwind CSS](https://tailwindcss.com/) documentation
- [Vite](https://vitejs.dev/) documentation
