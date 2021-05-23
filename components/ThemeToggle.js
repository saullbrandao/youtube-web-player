import { IoSunnyOutline, IoMoon } from 'react-icons/io5';
import { useState, useEffect } from 'react'

export const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (localStorage.darkMode === 'true') setDarkMode(localStorage.darkMode)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.darkMode = true
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.darkMode = false
    }

  }, [darkMode])
  return (
    <button className="flex-2 ml-2 rounded-sm pl-3 pr-3 transition duration-300 ease-out focus:outline-none hover:bg-gray-300 dark:hover:bg-gray-700" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? (
        <IoMoon />
      ) : (
        <IoSunnyOutline />
      )}
    </button>
  )
}