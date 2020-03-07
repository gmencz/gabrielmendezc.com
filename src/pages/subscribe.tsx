import React from 'react';
import Layout from '../components/layout';
import { RouterProps } from '@reach/router';

const SubscribePage: React.FC<RouterProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <h1>En desarrollo</h1>
    </Layout>
  );
};

export default SubscribePage;
