// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('./config/website')

module.exports = {
  siteMetadata: {
    siteUrl: config.siteUrl,
    title: config.siteTitle,
    description: config.siteDescription,
    keywords:
      'Software, Web development, Front End, Back End, GraphQL, React, Typescript, Javascript, NodeJS, Golang',
    canonicalUrl: config.siteUrl,
    author: config.author,
    image: config.siteLogo,
    social: {
      github: config.github,
      twitter: config.twitter,
    },
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gabriel Méndez C',
        short_name: 'gabrielmendezc',
        start_url: '/',
        lang: 'en',
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icon: 'static/images/logo.png',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || 'none',
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint:
          'https://gabrielmendezc.us19.list-manage.com/subscribe/post?u=9fb00bdc2df2e2dd96fe110d8&amp;id=34044d28a4',
      },
    },
  ],
}
