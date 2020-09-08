import React, {AnchorHTMLAttributes} from 'react'
import {Theme} from '../utils/palette'

interface Props extends AnchorHTMLAttributes<unknown> {
  internal?: string
}

const Anchor: React.FC<Props> = ({children, internal, ...props}) => {
  return (
    <a
      css={(theme: Theme) => ({
        backgroundImage: 'none',
        textShadow: `0.03em 0 ${theme.background}, -0.03em 0 ${theme.background}, 0 0.03em ${theme.background}, 0 -0.03em ${theme.background}, 0.06em 0 ${theme.background}, -0.06em 0 ${theme.background}, 0.09em 0 ${theme.background}, -0.09em 0 ${theme.background}, 0.12em 0 ${theme.background}, -0.12em 0 ${theme.background}, 0.15em 0 ${theme.background}, -0.15em 0 ${theme.background}`,
        color: '#1ca086',
        '&:hover': {
          backgroundImage:
            'linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, #1ca086 1px, #1ca086 2px, rgba(0, 0, 0, 0) 2px)',
        },
      })}
      {...props}
    >
      {children}
    </a>
  )
}

export default Anchor
