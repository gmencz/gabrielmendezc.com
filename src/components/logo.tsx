import React from 'react'
import LightLogo from '../assets/img/light-logo.svg'
import DarkLogo from '../assets/img/dark-logo.svg'
import {css} from '@emotion/core'

interface Props {
  theme: 'dark' | 'light'
}

const Logo: React.FC<Props> = ({theme}) => {
  if (theme === 'dark') {
    return <img src={DarkLogo} alt="Logo" css={css({width: 60, height: 60})} />
  }

  return <img src={LightLogo} alt="Logo" css={css({width: 60, height: 60})} />
}

export default Logo
