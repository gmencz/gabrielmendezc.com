import React from 'react'
import {css, Global} from '@emotion/core'
import Header from './header'
import ThemeProvider from '../context/theme'
import {Theme} from '../utils/palette'
import Footer from './footer'

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
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        })}
      >
        <Header />
        <div
          css={css({
            margin: '0 auto',
            maxWidth: 620,
            width: '100%',
            padding: '0 0 30px 0',
            '@media (max-width: 768px)': {
              padding: '0 20px 30px',
            },
          })}
        >
          {children}
        </div>
        <hr
          css={(theme: Theme) => ({
            width: '100%',
            maxWidth: 620,
            margin: '5rem auto calc(1.45rem - 1px)',
            backgroundColor: theme.contextualSpace,
          })}
        />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default Layout
