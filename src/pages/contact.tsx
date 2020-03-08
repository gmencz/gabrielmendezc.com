import React from 'react';
import Layout from '../components/Layout';
import { RouterProps } from '@reach/router';
import { SEO } from '../components/SEO';

const ContactPage: React.FC<RouterProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO
        customTitle="Háblame | Gabriel Méndez C."
        customDescription="Habla con Gabriel Méndez C. acerca de cualquier tema relacionado con el desarrollo de software."
      />
      <h1>En desarrollo</h1>
    </Layout>
  );
};

export default ContactPage;
