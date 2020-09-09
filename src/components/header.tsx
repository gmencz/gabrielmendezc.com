import React from 'react'
import {useTheme} from 'emotion-theming'
import Logo from './logo'
import NavLink from './nav-link'
import useThemeActions from '../hooks/useThemeActions'
import {Theme} from '../utils/palette'
import {Link} from 'gatsby'

const Header: React.FC = () => {
  const theme = useTheme() as Theme
  const {toggleTheme} = useThemeActions()

  return (
    <>
      <header
        css={{
          maxWidth: 650,
          margin: '0 auto 96px auto',
          minHeight: '70px',
          padding: '72px 0 0',
          width: '100%',
          display: 'flex',
          alignItems: 'flex-end',
          '@media (max-width: 768px)': {
            padding: '50px 30px 0 0px',
            margin: '0 auto 75px auto',
          },
        }}
      >
        <Link
          to="/"
          aria-label="View home page"
          css={{
            display: 'flex',
            textShadow: 'none',
            boxShadow: 'none',
            textDecoration: 'none',
            backgroundImage: 'none',
          }}
        >
          <Logo size={90} />
        </Link>
        <div
          css={{display: 'flex', flexDirection: 'column', marginLeft: 'auto'}}
        >
          <button
            onClick={toggleTheme}
            type="button"
            aria-label={
              theme.name === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'
            }
            title={
              theme.name === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'
            }
            css={{
              margin: '0 0 20px auto',
              opacity: theme.name === 'light' ? 1 : 0.65,
              position: 'relative',
              width: 40,
              height: 25,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'opacity 0.3s ease',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              outline: 0,
              padding: 0,
              '&:hover': {
                opacity: theme.name === 'light' ? 0.65 : 1,
              },
            }}
          >
            <div
              css={
                theme.name === 'light'
                  ? (theme: Theme) => ({
                      position: 'relative',
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      border: 'none',
                      backgroundColor: 'transparent',
                      transform: 'scale(1)',
                      transition: 'all 0.45s ease',
                      overflow: 'hidden',
                      boxShadow: `inset 8px -8px 0px 0px ${theme.title}`,
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        right: -9,
                        top: -9,
                        height: 24,
                        width: 24,
                        border: 'none',
                        borderRadius: '50%',
                        transform: 'translate(0, 0)',
                        opacity: '1',
                        transition: 'transform 0.45s ease',
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        margin: '-4px 0 0 -4px',
                        height: 8,
                        width: 8,
                        border: 'none',
                        borderRadius: '50%',
                        transform: 'scale(0)',
                        transition: 'all 0.35s ease',
                        boxShadow: `0 -23px 0 ${theme.title},0 23px 0 ${theme.title},23px 0 0 ${theme.title},-23px 0 0 ${theme.title},15px 15px 0 ${theme.title},-15px 15px 0 ${theme.title},15px -15px 0 ${theme.title},-15px -15px 0 ${theme.title}`,
                      },
                    })
                  : (theme: Theme) => ({
                      position: 'relative',
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      border: `4px solid ${theme.title}`,
                      backgroundColor: theme.title,
                      transform: 'scale(0.55)',
                      transition: 'all 0.45s ease',
                      overflow: 'visible',
                      boxShadow: 'none',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        right: -9,
                        top: -9,
                        height: 24,
                        width: 24,
                        border: `2px solid ${theme.title}`,
                        borderRadius: '50%',
                        transform: 'translate(14px, -14px)',
                        opacity: 0,
                        transition: 'transform 0.45s ease 0s',
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        margin: '-4px 0 0 -4px',
                        height: 8,
                        width: 8,
                        border: 'none',
                        borderRadius: '50%',
                        transform: 'scale(1)',
                        transition: 'all 0.35s ease',
                        boxShadow: `0 -23px 0 ${theme.title},0 23px 0 ${theme.title},23px 0 0 ${theme.title},-23px 0 0 ${theme.title},15px 15px 0 ${theme.title},-15px 15px 0 ${theme.title},15px -15px 0 ${theme.title},-15px -15px 0 ${theme.title}`,
                      },
                    })
              }
            ></div>
          </button>
          <nav>
            <ul css={{display: 'flex', margin: 0, listStyleType: 'none'}}>
              <li css={{marginBottom: 0}}>
                <NavLink aria-label="View blog page" to="/blog">
                  Blog
                </NavLink>
              </li>
              <li css={{marginBottom: 0, marginLeft: '40px'}}>
                <NavLink aria-label="View about page" to="/about">
                  About
                </NavLink>
              </li>
              <li css={{marginBottom: 0, marginLeft: '40px'}}>
                <NavLink aria-label="View contact page" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
