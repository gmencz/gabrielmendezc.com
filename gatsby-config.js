const config = require('./config/website');

module.exports = {
  siteMetadata: {
    siteUrl: config.siteUrl,
    title: config.siteTitle,
    description: config.siteDescription,
    keywords:
      'Desarrollo de aplicaciones, Desarrollo web, React, JavaScript, Node.js, Programación, GraphQL, TypeScript, HTML, CSS',
    canonicalUrl: config.siteUrl,
    author: config.author,
    image: config.siteLogo,
    social: {
      github: config.github,
      twitter: config.twitter
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/blog`
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src`
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/templates/post.tsx')
        },
        extensions: ['.mdx', '.md', '.markdown'],
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gabriel Méndez C.',
        short_name: 'gabrielmendezc',
        start_url: '/',
        lang: 'es',
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icon: 'static/images/gatsby-icon.png'
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || 'none',
        head: true
      }
    },
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          getBlogFeed({
            filePathRegex: `//content/blog//`,
            blogUrl: 'https://gabrielmendezc.com/blog',
            output: '/blog/rss.xml',
            title: 'Feed RSS de Gabriel Méndez C.',
            prefixUrl: '/blog'
          })
        ]
      }
    },
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint:
          'https://gabrielmendezc.us19.list-manage.com/subscribe/post?u=6e9d575c5d30a7cdff9e550fb&amp;id=1b4c0bf9f7'
      }
    }
  ]
};

function getBlogFeed({ filePathRegex, blogUrl, prefixUrl, ...overrides }) {
  /**
   * These RSS feeds can be quite expensive to generate. Limiting the number of
   * posts and keeping each item's template lightweight (only using frontmatter,
   * avoiding the html/excerpt fields) helps negate this.
   */
  const { siteUrl } = config;
  return {
    serialize: ({ query: { allMdx } }) => {
      const stripSlash = slug => (slug.startsWith('/') ? slug.slice(1) : slug);
      return allMdx.edges.map(edge => {
        const url = prefixUrl
          ? `${siteUrl}/${stripSlash(prefixUrl)}/${stripSlash(
              edge.node.frontmatter.path
            )}`
          : `${siteUrl}/${stripSlash(edge.node.frontmatter.path)}`;

        return {
          ...edge.node.frontmatter,
          url,
          guid: url,
          custom_elements: [
            {
              'content:encoded': `<div style="width: 100%; margin: 0 auto; max-width: 800px; padding: 40px 40px;">
                  <p>
                    He escrito un nuevo artículo <em>"${edge.node.frontmatter.title}"</em> y puedes <a href="${url}">leerlo online</a>.
                    <br>
                    ${edge.node.frontmatter.description}
                    <br>
                    También puedes <a href="${siteUrl}/subscribe">suscribirte</a> para recibir emails de desarrollo de software y nuevas tecnologías.
                  </p>
                </div>`
            }
          ]
        };
      });
    },
    query: `
       {
         allMdx(
           limit: 25,
           filter: {
             frontmatter: {published: {ne: false}}
             fileAbsolutePath: {regex: "${filePathRegex}"}
           }
           sort: { order: DESC, fields: [frontmatter___date] }
         ) {
           edges {
             node {
               frontmatter {
								 title
								 date
								 path
								 description
               }
             }
           }
         }
       }
     `,
    ...overrides
  };
}
