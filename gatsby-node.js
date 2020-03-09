const { resolve } = require('path');
const { paginate } = require('gatsby-awesome-pagination');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = resolve('src/components/Layout/PostLayout/index.tsx');
  try {
    const { data } = await graphql(`
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fileAbsolutePath
              frontmatter {
                path
                title
                date
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `);

    const posts = data.allMdx.edges;

    posts.forEach((post, index) => {
      const previous =
        index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      createPage({
        path: `/blog${post.node.frontmatter.path}`,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          pagePath: post.node.frontmatter.path,
          previous,
          next
        }
      });
    });

    paginate({
      createPage,
      items: posts,
      itemsPerPage: 10,
      pathPrefix: '/blog',
      component: resolve('src/components/Layout/BlogLayout/index.tsx')
    });
  } catch (error) {
    console.error(error);
  }
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};
