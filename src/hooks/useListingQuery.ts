import { graphql, useStaticQuery } from "gatsby";
import { PostsQueryData } from "../interfaces/PostsQuery.interface";

export const useListingQuery = () => {
  const { allMdx }: PostsQueryData = useStaticQuery(graphql`
    query LISTING_QUERY {
      allMdx(limit: 5, sort: { fields: [frontmatter___date], order: DESC }) {
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
