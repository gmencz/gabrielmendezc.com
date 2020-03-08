import React from 'react';
import Layout from '../components/Layout';
import { RouterProps } from '@reach/router';

const ContactPage: React.FC<RouterProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <h1>En desarrollo</h1>
    </Layout>
  );
};

export default ContactPage;
