import { gql } from "../lib/graphql";

export const PublishedPostsDocument = gql`
  query PublishedPosts {
    posts_connection(
      order_by: { published_at: desc }
      where: { published: { _eq: true } }
    ) {
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

export const AllPostsDocument = gql`
  query AllPosts {
    posts_connection(order_by: { published_at: desc }) {
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
          slug
          published
          published_at
        }
      }
    }
  }
`;

export const EditPostBySlugDocument = gql`
  mutation EditPostBySlug($slug: String!, $data: posts_set_input) {
    update_posts(where: { slug: { _eq: $slug } }, _set: $data) {
      affected_rows
    }
  }
`;
