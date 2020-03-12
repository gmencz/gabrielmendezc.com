import React from 'react';
import Layout from '../components/Layout';
import { RouterProps } from '@reach/router';
import { SEO } from '../components/SEO';

const SubscribePage: React.FC<RouterProps> = ({ location }) => {
  return (
    <Layout noFooter location={location}>
      <SEO
        customTitle="Subscríbete | Gabriel Méndez C."
        customDescription="Subscríbete al boletín de Gabriel Méndez C. para mantenerte actualizado sobre novedades acerca del desarrollo de software."
      />
      <h1>En desarrollo</h1>
    </Layout>
  );
};

export default SubscribePage;
