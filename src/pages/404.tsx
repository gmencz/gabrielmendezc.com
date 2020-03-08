import * as React from 'react';
import Layout from '../components/Layout';
import { SEO } from '../components/SEO';
import { InternalLink, ParagraphHeading } from '../components/SharedStyles';

const NotFoundPage = () => (
  <Layout>
    <SEO customTitle="404" />
    <h1 style={{ marginBottom: '1.5rem' }}>Página no encontrada</h1>
    <ParagraphHeading>
      La página que has solicitado no existe o ha sido eliminada, mientras te
      planteas si esta es la página a la que querías acceder, puedes echarle un
      vistazo a{' '}
      <InternalLink to="/blog" style={{ fontSize: '1.33rem' }}>
        mi blog
      </InternalLink>{' '}
    </ParagraphHeading>
  </Layout>
);

export default NotFoundPage;
