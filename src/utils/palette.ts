type ThemeName = 'light' | 'dark'

export interface Theme {
  primary: string
  title: string
  text: string
  background: string
  name: ThemeName
}

interface Palette {
  light: Theme
  dark: Theme
}

const palette: Palette = {
  light: {
    name: 'light',
    background: '#ffffff',
    primary: '#1ca086',
    title: 'hsla(0,0%,0%,0.9)',
    text: 'hsla(0,0%,0%,0.85)',
  },
  dark: {
    name: 'dark',
    background: 'rgb(23, 25, 35)',
    primary: 'red',
    title: 'hsla(255,100%,100%,0.9)',
    text: 'hsla(255,100%,100%,0.85)',
  },
}

export default palette
