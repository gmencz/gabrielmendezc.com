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
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
