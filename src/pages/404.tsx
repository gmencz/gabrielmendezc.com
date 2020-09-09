import React from 'react'
import Layout from '../components/layout'
import {Theme} from '../utils/palette'
import {Link} from 'gatsby'

const NotFound: React.FC = () => {
  return (
    <Layout>
      <h1
        css={(theme: Theme) => ({
          color: theme.title,
        })}
      >
        Oops!
      </h1>
      <p
        css={(theme: Theme) => ({
          color: theme.text,
        })}
      >
        We can&apos;t seem to find the page you&apos;re looking for, you may
        have more luck on the{' '}
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
          homepage
        </Link>
        .
      </p>
    </Layout>
  )
}

export default NotFound
