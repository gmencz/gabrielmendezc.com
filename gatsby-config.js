module.exports = {
  siteMetadata: {
    siteUrl: 'https://gabrielmendezc.com',
    title: 'Gabriel Méndez',
    description: 'Página web personal de Gabriel M. Cortizo',
    keywords: ['Desarrollador', 'Desarrollador web', 'React', 'JavaScript'],
    canonicalUrl: 'https://gabrielmendezc.com',
    author: 'Gabriel M. Cortizo',
    social: {
      github: 'gabrielmendezc'
    }
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-typescript',
    'gatsby-transformer-remark',
    'gatsby-image',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-mdx`,
      options: {
        decks: [],
        defaultLayouts: {
          default: require.resolve('./src/components/postLayout.tsx')
        },
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              inlineCodeMarker: {
                tsx: 'tsx'
              },
              aliases: {}
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/blog`,
        ignore: ['**/.tsx*']
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/static/images`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gabriel Méndez',
        short_name: 'gabrielmcortizo',
        start_url: '/',
        lang: 'es',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'standalone',
        icon: 'static/images/gatsby-icon.png'
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['Px Grotesk Regular, Px Grotesk Bold'],
          urls: ['/fonts/fonts.css']
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Source Code Pro`],
        display: `swap`
      }
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/sw.js': ['Cache-Control: no-cache']
        }
      }
    },
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-preload-fonts`
  ]
};
