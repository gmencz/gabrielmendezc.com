import { gql } from "../utils/graphql";

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
      returning {
        slug
      }
    }
  }
`;

export const UnpublishPostBySlugDocument = gql`
  mutation UnpublishPostBySlug($slug: String!) {
    update_posts(where: { slug: { _eq: $slug } }, _set: { published: false }) {
      affected_rows
    }
  }
`;

export const PublishPostBySlugDocument = gql`
  mutation PublishPostBySlug($slug: String!, $now: date!) {
    update_posts(
      where: { slug: { _eq: $slug } }
      _set: { published: true, published_at: $now }
    ) {
      affected_rows
    }
  }
`;

export const DeletePostBySlugDocument = gql`
  mutation DeletePostBySlug($slug: String!) {
    delete_posts(where: { slug: { _eq: $slug } }) {
      affected_rows
    }
  }
`;

export const CreatePostDocument = gql`
  mutation CreatePost($data: posts_insert_input!) {
    insert_posts_one(object: $data) {
      slug
    }
  }
`;
