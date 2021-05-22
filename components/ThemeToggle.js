import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';
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
    <div className="transition duration-500 ease-in-out rounded-full p-2" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? (
        <IoMoonOutline />
      ) : (
        <IoSunnyOutline />
      )}
    </div>
  )
}