import React from 'react'
import {Link} from 'gatsby'
import Logo from './logo'
import {css} from '@emotion/core'

const Header: React.FC = () => {
  return (
    <header css={css({display: 'flex', maxWidth: 700, margin: '0 auto'})}>
      <Logo theme="light" />
      <nav>
        <ul>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
