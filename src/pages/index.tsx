import React from 'react'
import {css} from '@emotion/core'

const Home: React.FC = () => {
  return (
    <h1
      css={css({
        color: 'red',
      })}
    >
      Hello Gatsby!!
    </h1>
  )
}

export default Home
