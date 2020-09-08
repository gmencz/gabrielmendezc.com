import React from 'react'
import {css} from '@emotion/core'
import Logo from './logo'
import NavLink from './nav-link'

const Header: React.FC = () => {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light')

  const changeTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'))
  }

  console.log(theme)

  return (
    <>
      <header
        css={css({
          display: 'flex',
          maxWidth: 640,
          margin: '0 auto 96px auto',
          alignItems: 'center',
          minHeight: '70px',
          padding: '72px 0 0',
        })}
      >
        <Logo theme="light" size={90} />
        <div
          css={css({
            marginLeft: 'auto',
            display: 'flex',
            flexDirection: 'column',
          })}
        >
          <button
            onClick={changeTheme}
            type="button"
            aria-label={
              theme === 'light' ? 'Activate Dark Mode' : 'Activate Light Mode'
            }
            title={
              theme === 'light' ? 'Activate Dark Mode' : 'Activate Light Mode'
            }
            css={css({
              margin: '0 0 20px auto',
              opacity: 0.65,
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
                opacity: 1,
              },
            })}
          >
            <div
              css={
                theme === 'light'
                  ? css({
                      position: 'relative',
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      border: 'none',
                      backgroundColor: 'transparent',
                      transform: 'scale(1)',
                      transition: 'all 0.45s ease',
                      overflow: 'hidden',
                      boxShadow: 'inset 8px -8px 0px 0px #5f6c80',
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
                        boxShadow:
                          '0 -23px 0 #5f6c80,0 23px 0 #5f6c80,23px 0 0 #5f6c80,-23px 0 0 #5f6c80,15px 15px 0 #5f6c80,-15px 15px 0 #5f6c80,15px -15px 0 #5f6c80,-15px -15px 0 #5f6c80',
                      },
                    })
                  : css({
                      position: 'relative',
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      border: '4px solid #5f6c80',
                      backgroundColor: '#5f6c80',
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
                        border: '2px solid #5f6c80',
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
                        boxShadow:
                          '0 -23px 0 #5f6c80,0 23px 0 #5f6c80,23px 0 0 #5f6c80,-23px 0 0 #5f6c80,15px 15px 0 #5f6c80,-15px 15px 0 #5f6c80,15px -15px 0 #5f6c80,-15px -15px 0 #5f6c80',
                      },
                    })
              }
            ></div>
          </button>
          <nav>
            <ul
              css={css({
                display: 'flex',
                alignItems: 'center',
                listStyleType: 'none',
                margin: 0,
              })}
            >
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li css={css({marginLeft: '40px'})}>
                <NavLink to="/about">About</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
