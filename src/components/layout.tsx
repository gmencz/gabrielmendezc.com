import React from 'react'
import {css, Global} from '@emotion/core'
import Header from './header'
import ThemeProvider from '../context/theme'
import {Theme} from '../utils/palette'

const Layout: React.FC = ({children}) => {
  return (
    <ThemeProvider>
      <Global
        styles={css`
          html {
            overflow-y: visible;
          }
        `}
      />
      <div
        css={(theme: Theme) => ({
          backgroundColor: theme.background,
          minHeight: '100vh',
          transition: 'background-color 0.35s ease',
        })}
      >
        <Header />
        <div
          css={css({
            margin: '0 auto',
            maxWidth: 620,
            padding: '0 0 30px 0',
            '@media (max-width: 768px)': {
              padding: '0 20px 30px',
            },
          })}
        >
          {children}
        </div>
      </div>
    </ThemeProvider>
  )
}

export default Layout
