import React from 'react'
import Layout from '../components/layout'
import {Theme} from '../utils/palette'
import {graphql} from 'gatsby'
import {SEO} from '../components/seo'

interface Props {
  data: {
    site: {
      siteMetadata: {
        author: string
      }
    }
  }
}

const Home: React.FC<Props> = ({data}) => {
  return (
    <Layout>
      <SEO />
      <h1
        css={(theme: Theme) => ({
          color: theme.title,
        })}
      >
        Hi! I&apos;m{' '}
        {data.site.siteMetadata.author.split(' ').slice(0, 2).join(' ')}.
      </h1>
      <p
        css={(theme: Theme) => ({
          color: theme.text,
        })}
      >
        I&apos;m a{' '}
        <strong>developer, writer and data protection consultant</strong> living
        in Vigo, Spain. This is my personal corner of the internet where I like
        to spread knowledge and share my opinion on random topics from time to
        time.
      </p>
    </Layout>
  )
}

export const query = graphql`
  query HomePageMetadata {
    site {
      siteMetadata {
        author
      }
    }
  }
`

export default Home
