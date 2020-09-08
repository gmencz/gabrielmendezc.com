import React from 'react'
import {Link} from 'gatsby'
import {css} from '@emotion/core'

interface Props {
  to: string
}

const NavLink: React.FC<Props> = ({to, children}) => (
  <Link
    css={css({
      color: '#5f6c80',
      textDecoration: 'none',
      backgroundImage: 'none',
      textShadow: 'none',
      fontSize: '.925rem',
      '&:hover': {
        textShadow:
          '0.03em 0 #fff, -0.03em 0 #fff, 0 0.03em #fff, 0 -0.03em #fff, 0.06em 0 #fff, -0.06em 0 #fff, 0.09em 0 #fff, -0.09em 0 #fff, 0.12em 0 #fff, -0.12em 0 #fff, 0.15em 0 #fff, -0.15em 0 #fff',
        color: '#1ca086',
        backgroundImage:
          'linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, #1ca086 1px, #1ca086 2px, rgba(0, 0, 0, 0) 2px)',
      },
    })}
    to={to}
  >
    {children}
  </Link>
)

export default NavLink
