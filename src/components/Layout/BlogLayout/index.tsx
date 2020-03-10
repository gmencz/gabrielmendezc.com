import { RouterProps } from '@reach/router';
import React from 'react';
import Layout from '../index';
import { SEO } from '../../SEO';
import { graphql } from 'gatsby';
import { EdgeNode } from '../../../interfaces/EdgeNode.interface';
import { Post as PostInterface } from '../../../interfaces/PostsQuery.interface';
import { Post } from '../../Post';
import { ParagraphHeading, InternalLink } from '../../SharedStyles';
import { Footer, ChangePageLink } from './styles';

type BlogLayoutProps = {
  data: { allMdx: { edges?: [EdgeNode<PostInterface>] } };
} & RouterProps & {
    pageContext: { previousPagePath: string; nextPagePath: string };
  };

const PostLayout: React.FC<BlogLayoutProps> = ({
  data,
  location,
  pageContext
}) => {
  if (!data) {
    return null;
  }

  const postsJSX = data.allMdx.edges!.map(
    ({
      node: {
        frontmatter: { path, title, date },
        timeToRead,
        excerpt
      }
    }) => (
      <Post
        key={path}
        date={date}
        path={path}
        timeToRead={timeToRead}
        title={title}
        excerpt={excerpt}
      />
    )
  );

  return (
    <Layout location={location}>
      <SEO
        customTitle="Blog | Gabriel Méndez C."
        customDescription="Lee artículos escritos por Gabriel Méndez C. sobre la resolución de problemas con código, novedades y mejores prácticas acerca del desarrollo de software."
      />
      <h1>Blog</h1>
      <ParagraphHeading margin="1.5rem 0 4rem 0">
        Escribo artículos sobre resolución de problemas con código, novedades y
        mejores prácticas acerca del desarrollo de software.{' '}
        <InternalLink style={{ fontSize: '1.33rem' }} to="/subscribe">
          Subscríbete al boletín
        </InternalLink>{' '}
        para no perderte ninguna novedad.
      </ParagraphHeading>
      <section>{postsJSX}</section>
      <Footer>
        {pageContext.previousPagePath && (
          <ChangePageLink to={pageContext.previousPagePath}>
            ← Página anterior
          </ChangePageLink>
        )}
        {pageContext.nextPagePath && (
          <ChangePageLink to={pageContext.nextPagePath}>
            Página siguiente →
          </ChangePageLink>
        )}
      </Footer>
    </Layout>
  );
};

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip
      limit: $limit
      filter: { frontmatter: { published: { ne: false } } }
    ) {
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
`;

export default PostLayout;
