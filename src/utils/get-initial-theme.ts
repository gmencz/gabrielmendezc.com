function getInitialTheme(): 'light' | 'dark' {
  const persistedTheme = localStorage.getItem('theme')

  // If the user has explicitly chosen a theme, use it.
  if (persistedTheme) {
    return persistedTheme as 'light' | 'dark'
  }

  // If they haven't been explicit, check their
  // browser/OS's preferred color scheme.
  const mql = matchMedia('(prefers-color-scheme: dark)')
  const hasMediaQueryPreference = typeof mql.matches === 'boolean'

  if (hasMediaQueryPreference) {
    return mql.matches ? 'dark' : 'light'
  }

  // If they are using a browser/OS that doesn't support
  // color themes, default to 'light'.
  return 'light'
}

export default getInitialTheme
