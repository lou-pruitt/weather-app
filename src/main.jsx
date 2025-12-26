// src/main.jsx - This is where the React app starts

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// ReactDOM.createRoot: This finds the #root div in index.html
// and tells React: "Put the app inside this div"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
