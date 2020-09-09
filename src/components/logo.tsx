import React from 'react'
import LogoSrc from '../../static/images/logo.svg'

interface Props {
  size?: string | number
}

const Logo: React.FC<Props> = ({size = 50}) => {
  return (
    <img
      src={LogoSrc}
      alt="Logo"
      css={{width: size, height: size, margin: 0}}
    />
  )
}

export default Logo
