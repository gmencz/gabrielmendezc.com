import React from 'react'
import {ThemeProvider as EmotionThemeProvider} from 'emotion-theming'
import palette from '../utils/palette'
import getInitialTheme from '../utils/get-initial-theme'

export interface ThemeContext {
  setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>
  toggleTheme: () => void
}

export const Theme = React.createContext<ThemeContext | null>(null)

const ThemeProvider: React.FC = ({children}) => {
  const [theme, setTheme] = React.useState(() => getInitialTheme())

  React.useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <Theme.Provider value={{setTheme, toggleTheme}}>
      <EmotionThemeProvider
        theme={theme === 'light' ? palette.light : palette.dark}
      >
        {children}
      </EmotionThemeProvider>
    </Theme.Provider>
  )
}

export default ThemeProvider
