import { gql } from "../lib/graphql";

export const PostsDocument = gql`
  query Posts($where: posts_bool_exp) {
    posts_connection(order_by: { published_at: desc }, where: $where) {
      edges {
        node {
          id
          title
          excerpt
          body
          slug
          published_at
        }
      }
    }
  }
`;

export const PostBySlugDocument = gql`
  query PostBySlug($slug: String!) {
    posts_connection(where: { slug: { _eq: $slug } }) {
      edges {
        node {
          title
          excerpt
          body
          published_at
        }
      }
    }
  }
`;
