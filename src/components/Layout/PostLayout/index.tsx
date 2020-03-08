import { RouterProps } from '@reach/router';
import React from 'react';
import { PostQueryData } from '../../../interfaces/PostQuery.interface';
import Layout from '../index';
import styled from 'styled-components';

type PostLayoutProps = PostQueryData & RouterProps;

const IndividualPost = styled.section`
  & > h1 {
    margin-bottom: 1.5rem;
    color: rgb(26, 32, 44);
    font-size: 2.15rem;
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
    margin: 0 0 1.5rem 0;
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
`;

const PostLayout: React.FC<PostLayoutProps> = ({ data, ...props }) => {
  if (!data) {
    return null;
  }

  const { title } = data.mdx.frontmatter;
  const { location, children } = props;

  return (
    <Layout location={location}>
      <IndividualPost>
        <h1>{title}</h1>
        <IndividualPostBody>{children}</IndividualPostBody>
      </IndividualPost>
    </Layout>
  );
};

export default PostLayout;
