import React from 'react'
import {css} from '@emotion/core'
import LightLogoSrc from '../assets/img/light-logo.svg'
import DarkLogoSrc from '../assets/img/dark-logo.svg'

interface Props {
  theme: 'dark' | 'light'
  size?: string | number
}

const Logo: React.FC<Props> = ({theme, size = 50}) => {
  return (
    <img
      src={theme === 'dark' ? DarkLogoSrc : LightLogoSrc}
      alt="Logo"
      css={css({width: size, height: size, margin: 0})}
    />
  )
}

export default Logo
