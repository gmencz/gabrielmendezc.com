import React from 'react'
import {Theme, ThemeContext} from '../context/theme'

function useThemeActions(): ThemeContext {
  const themeContext = React.useContext(Theme)

  if (!themeContext) {
    throw new Error(
      'Theme context is needed, make sure you implemented <ThemeProvider>...</ThemeProvider>.',
    )
  }

  return themeContext
}

export default useThemeActions
