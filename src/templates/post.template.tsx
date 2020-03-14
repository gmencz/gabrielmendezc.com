import React from 'react';
import { RouterProps } from '@reach/router';
import styled from 'styled-components';
import { graphql } from 'gatsby';
// @ts-ignore
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout/layout.component';
import { SEO } from '../components/seo/seo.component';

type PostLayoutProps = {
  data: {
    mdx: {
      excerpt: string;
      timeToRead: number;
      html: string;
      body: string;
      frontmatter: {
        path: string;
        title: string;
        date: string;
        description: string;
        image: string;
        keywords: string;
      };
    };
  };
} & RouterProps;

const IndividualPost = styled.section`
  & > h1 {
    margin-bottom: 1.5rem;
    color: rgb(26, 32, 44);
    font-size: 2rem;
  }
`;

const IndividualPostBody = styled.article`
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 1.5rem;
  }
  p {
    font-size: 1.15rem;
    margin-bottom: 1.5rem;
    line-height: 1.7;
  }

  pre[class*='language-'] {
    margin: 0 0 3rem 0;
  }

  a {
    font-size: 1.15rem;
    color: ${props => props.theme.linkColor} !important;
    border-bottom: 1px dotted #2b6cb0;
    padding-bottom: 0.15rem;
  }

  ul,
  ol {
    margin-left: 1.85rem;
    margin-bottom: 1.5rem;
    font-size: 1.15rem;
    li {
      margin-bottom: 0.35rem;
    }
  }

  #jquery-alternatives ~ h3 {
    text-decoration: underline;
  }
`;

const PostLayout: React.FC<PostLayoutProps> = ({ data, location }) => {
  if (!data) return null;

  const {
    mdx,
    mdx: {
      frontmatter: { path, title, description, image, keywords, date }
    }
  } = data;

  return (
    <Layout location={location}>
      <SEO
        isBlogPost
        postMeta={{ path, title, description, image, keywords, date }}
      />
      <IndividualPost>
        <h1>{title}</h1>
        <IndividualPostBody>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </IndividualPostBody>
      </IndividualPost>
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogPost($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      excerpt
      timeToRead
      body
      frontmatter {
        path
        title
        date(formatString: "MMMM DD, YYYY", locale: "es")
        description
        image
        keywords
      }
    }
  }
`;

export default PostLayout;
