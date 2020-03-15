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
          default: require.resolve('./src/templates/post.template.tsx')
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
        name: 'Gabriel Méndez C',
        short_name: 'gabrielmendezc',
        start_url: '/',
        lang: 'es',
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icon: 'static/images/site-logo.jpg'
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
            title: 'Blog de Gabriel Méndez C.',
            prefixUrl: '/blog'
          })
        ]
      }
    },
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint:
          'https://gabrielmendezc.us19.list-manage.com/subscribe/post?u=9fb00bdc2df2e2dd96fe110d8&amp;id=34044d28a4'
      }
    }
  ]
};

function getBlogFeed({ filePathRegex, blogUrl, prefixUrl, ...overrides }) {
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
              'content:encoded': `
								<div>
                  <p>
                    He escrito un nuevo artículo <em>"${edge.node.frontmatter.title}"</em> y puedes <a href="${url}">leerlo online</a>.
									</p>
									<br>
									<p>
										${edge.node.frontmatter.description}
									</p>
									<br>
									<p>También puedes echarle un vistazo a mi <a href="https://gabrielmendezc.com/blog">blog</a> para leer más artículos</p>
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
