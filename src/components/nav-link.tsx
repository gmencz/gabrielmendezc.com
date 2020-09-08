import React from 'react'
import {Link} from 'gatsby'
import {Theme} from '../utils/palette'

interface Props {
  to: string
  'aria-label': string
}

const NavLink: React.FC<Props> = ({to, children, ...props}) => {
  return (
    <Link
      aria-label={props['aria-label']}
      to={to}
      css={(theme: Theme) => ({
        // color: '#5f6c80',
        color: theme.text,
        textDecoration: 'none',
        backgroundImage: 'none',
        textShadow: 'none',
        fontSize: '.925rem',
        '&:hover': {
          textShadow: `0.03em 0 ${theme.background}, -0.03em 0 ${theme.background}, 0 0.03em ${theme.background}, 0 -0.03em ${theme.background}, 0.06em 0 ${theme.background}, -0.06em 0 ${theme.background}, 0.09em 0 ${theme.background}, -0.09em 0 ${theme.background}, 0.12em 0 ${theme.background}, -0.12em 0 ${theme.background}, 0.15em 0 ${theme.background}, -0.15em 0 ${theme.background}`,
          color: '#1ca086',
          backgroundImage:
            'linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, #1ca086 1px, #1ca086 2px, rgba(0, 0, 0, 0) 2px)',
        },
      })}
    >
      {children}
    </Link>
  )
}

export default NavLink
