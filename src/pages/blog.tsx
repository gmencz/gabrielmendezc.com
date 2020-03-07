import React from 'react';
import Layout from '../components/layout';
import { RouterProps } from '@reach/router';
import { ParagraphHeading, InternalLink } from '../components/SharedStyles';

const BlogPage: React.FC<RouterProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <h1>Blog</h1>
      <ParagraphHeading margin="1.5rem 0">
        Escribo artículos sobre resolución de problemas con código, novedades y
        mejores prácticas acerca del desarrollo de software.{' '}
        <InternalLink style={{ fontSize: '1.33rem' }} to="/subscribe">
          Subscríbete al boletín
        </InternalLink>{' '}
        para no perderte ninguna novedad.
      </ParagraphHeading>
      <section></section>
    </Layout>
  );
};

export default BlogPage;
