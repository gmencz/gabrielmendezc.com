import React from 'react';
import Layout from '../components/Layout';
import { RouterProps } from '@reach/router';
import { ParagraphHeading, InternalLink } from '../components/SharedStyles';
import { SEO } from '../components/SEO';
import { useBlogQuery } from '../hooks/useBlogQuery';
import { Post } from '../components/Post';

const BlogPage: React.FC<RouterProps> = ({ location }) => {
  const { allMdx } = useBlogQuery();

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
      <section>
        {allMdx &&
          allMdx.edges &&
          allMdx.edges.map(({ node }) => {
            const { path, title, date } = node.frontmatter;
            return (
              <Post
                key={path}
                date={date}
                excerpt={node.excerpt}
                path={path}
                title={title}
                timeToRead={node.timeToRead}
              />
            );
          })}
      </section>
    </Layout>
  );
};

export default BlogPage;
