import React, { useEffect, useState } from 'react'
import { ThemeContext } from './ThemeContext'

const ThemeContextProvider =({children}) => {
    const [themeMode, setThemeMode] = useState('light')
    
    const lightTheme = () => {
        setThemeMode("light")
    }
    const darkTheme = () => {
        setThemeMode("dark")
    }
        // actual change in theme mode


        useEffect(()=>{
            document.querySelector('html').classList.remove("light","dark")
            document.querySelector('html').classList.add(themeMode)
        }, [themeMode])

  return (
    <ThemeContext.Provider  value={{themeMode, setThemeMode, darkTheme, lightTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider