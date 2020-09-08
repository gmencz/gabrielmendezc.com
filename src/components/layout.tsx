import React from 'react'
import {css} from '@emotion/core'
import Header from './header'
import ThemeProvider from '../context/theme'
import {Theme} from '../utils/palette'

const Layout: React.FC = ({children}) => {
  return (
    <ThemeProvider>
      <div
        css={(theme: Theme) => ({
          minHeight: '100vh',
          backgroundColor: theme.background,
          transition: 'background-color 0.35s ease',
        })}
      >
        <Header />
        <div css={css({margin: '3rem auto', maxWidth: 600})}>{children}</div>
      </div>
    </ThemeProvider>
  )
}

export default Layout
