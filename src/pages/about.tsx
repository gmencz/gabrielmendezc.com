import * as React from 'react';
import Layout from '../components/Layout';
import { RouterProps } from '@reach/router';

const AboutPage: React.FC<RouterProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <h1>En desarrollo</h1>
    </Layout>
  );
};

export default AboutPage;
