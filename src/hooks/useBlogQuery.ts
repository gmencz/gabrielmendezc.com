import { graphql, useStaticQuery } from 'gatsby';
import { PostsQueryData } from '../interfaces/PostsQuery.interface';

export const useBlogQuery = () => {
  const { allMdx }: PostsQueryData = useStaticQuery(graphql`
    query BLOG_QUERY {
      allMdx(limit: 10, sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            excerpt
            timeToRead
            frontmatter {
              path
              title
              date(formatString: "MMMM DD, YYYY", locale: "es")
            }
          }
        }
      }
    }
  `);

  return { allMdx };
};
