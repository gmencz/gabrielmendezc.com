import React from 'react'
import Layout from '../components/layout'
import {Theme} from '../utils/palette'
import Anchor from '../components/anchor'
import {Link, graphql} from 'gatsby'

interface Props {
  data: {
    site: {
      siteMetadata: {
        author: string
        social: {
          github: string
        }
      }
    }
  }
}

const About: React.FC<Props> = ({data}) => {
  return (
    <Layout>
      <h1
        css={(theme: Theme) => ({
          color: theme.title,
        })}
      >
        About me
      </h1>
      <p
        css={(theme: Theme) => ({
          color: theme.text,
        })}
      >
        Hi, I&apos;m{' '}
        {data.site.siteMetadata.author.split(' ').slice(0, 2).join(' ')}.
        I&apos;m a{' '}
        <strong>developer, writer and data protection consultant</strong> living
        in Vigo, Spain, where I graduated with a degree in computer science.
      </p>
      <p
        css={(theme: Theme) => ({
          color: theme.text,
        })}
      >
        Teaching and providing reliable and high quality software is my passion.
        As a developer I consider myself a ‘forever student’ eager to grow both
        as a person and a developer. In my free time I help{' '}
        <strong>maintain OSS projects</strong> which you can check out{' '}
        <Anchor href={data.site.siteMetadata.social.github}>here</Anchor>.
        Another passion I have is exploring new technologies, I find some of
        them <span css={{fontStyle: 'italic'}}>fascinating</span>.
      </p>
      <p
        css={(theme: Theme) => ({
          color: theme.text,
        })}
      >
        At the beggining of the year I{' '}
        <strong>joined an online community of developers</strong> on{' '}
        <Anchor href="https://discord.com">discord</Anchor> and since then
        I&apos;ve helped hundreds of developers achieve their goals and become
        better at what they do,{' '}
        <Anchor href="https://theprogrammershangout.com">check it out!</Anchor>.
      </p>
      <p
        css={(theme: Theme) => ({
          color: theme.text,
        })}
      >
        Currently working at{' '}
        <Anchor href="https://confialis.com/">Confialis</Anchor> building
        internal and external software mostly around data protection which takes
        care of both our needs and those of our customers.
      </p>
      <blockquote css={{margin: 0}}>
        <p
          css={(theme: Theme) => ({
            color: theme.text,
          })}
        >
          Psst, if you&apos;re bored and feel like having a chat about anything
          with another fellow human being feel free to{' '}
          <Link
            css={(theme: Theme) => ({
              backgroundImage: 'none',
              textShadow: `0.03em 0 ${theme.background}, -0.03em 0 ${theme.background}, 0 0.03em ${theme.background}, 0 -0.03em ${theme.background}, 0.06em 0 ${theme.background}, -0.06em 0 ${theme.background}, 0.09em 0 ${theme.background}, -0.09em 0 ${theme.background}, 0.12em 0 ${theme.background}, -0.12em 0 ${theme.background}, 0.15em 0 ${theme.background}, -0.15em 0 ${theme.background}`,
              color: '#1ca086',
              '&:hover': {
                backgroundImage:
                  'linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, #1ca086 1px, #1ca086 2px, rgba(0, 0, 0, 0) 2px)',
              },
            })}
            to="/contact"
          >
            contact me!
          </Link>
        </p>
      </blockquote>
    </Layout>
  )
}

export const query = graphql`
  query AboutPageMetadata {
    site {
      siteMetadata {
        author
        social {
          github
        }
      }
    }
  }
`

export default About
