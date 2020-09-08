import React from 'react'
import Layout from '../components/layout'
import {Theme} from '../utils/palette'

const Home: React.FC = () => {
  return (
    <Layout>
      <h1
        css={(theme: Theme) => ({
          color: theme.title,
        })}
      >
        Hi! I&apos;m Gabriel.
      </h1>
      <p
        css={(theme: Theme) => ({
          color: theme.text,
        })}
      >
        I&apos;m a developer living in Vigo, Spain. This is my personal corner
        of the internet where I like to spread knowledge and share my opinion on
        random topics from time to time.
      </p>
    </Layout>
  )
}

export default Home
