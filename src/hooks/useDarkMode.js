// src/hooks/useDarkMode.js
// Custom hook to manage dark mode state with localStorage persistence

import { useState, useEffect } from 'react'

export const useDarkMode = () => {
  // darkMode: Boolean state for dark mode
  // setDarkMode: Function to toggle dark mode
  const [darkMode, setDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)

  // useEffect: Load dark mode preference from localStorage on component mount
  useEffect(() => {
    // Check if user previously saved a dark mode preference
    const savedDarkMode = localStorage.getItem('weatherAppDarkMode')
    if (savedDarkMode !== null) {
      // If saved, use that preference
      setDarkMode(JSON.parse(savedDarkMode))
    } else {
      // Otherwise, check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setDarkMode(prefersDark)
    }
    setMounted(true)
  }, [])

  // Save dark mode preference to localStorage whenever it changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('weatherAppDarkMode', JSON.stringify(darkMode))
    }
  }, [darkMode, mounted])

  // toggleDarkMode: Function to toggle dark mode on/off
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return { darkMode, toggleDarkMode, mounted }
}
