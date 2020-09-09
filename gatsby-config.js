module.exports = {
  siteMetadata: {
    siteUrl: 'https://gabrielmendezc.com',
    title: 'Gabriel Méndez',
    description:
      'Come check out how Gabriel Méndez can help you level up your career as a developer',
    keywords:
      'Software, Web development, Front End, Back End, GraphQL, React, Typescript, Javascript, NodeJS, Golang',
    canonicalUrl: 'https://gabrielmendezc.com',
    author: 'Gabriel Méndez',
    image: 'static/img/logo.svg',
    social: {
      github: 'https://github.com/gmencz',
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
