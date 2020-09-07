import React from 'react'
import {css} from '@emotion/core'
import Header from './header'

const Layout: React.FC = ({children}) => {
  return (
    <>
      <Header />
      <div css={css({margin: '3rem auto', maxWidth: 700})}>{children}</div>
    </>
  )
}

export default Layout
