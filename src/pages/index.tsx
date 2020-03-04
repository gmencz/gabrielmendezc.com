import { RouterProps } from '@reach/router';
import * as React from 'react';
import Layout from '../components/layout';

const IndexPage: React.FunctionComponent<RouterProps> = ({ location }) => (
  <Layout location={location}>
    <h1>Hello</h1>
  </Layout>
);

export default IndexPage;
