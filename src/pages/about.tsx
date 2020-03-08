import * as React from 'react';
import Layout from '../components/Layout';
import { RouterProps } from '@reach/router';
import { SEO } from '../components/SEO';

const AboutPage: React.FC<RouterProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO customTitle="Sobre Mí | Gabriel Méndez C." customDescription="Todo sobre Gabriel Méndez C." />
      <h1>En desarrollo</h1>
    </Layout>
  );
};

export default AboutPage;
