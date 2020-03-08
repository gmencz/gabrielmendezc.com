import React from 'react';
import Layout from '../components/Layout';
import { RouterProps } from '@reach/router';
import { SEO } from '../components/SEO';

const ProjectsPage: React.FC<RouterProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO customTitle="Proyectos | Gabriel Méndez C." customDescription="Proyectos de código abierto (Open Source) por Gabriel Méndez C." />
      <h1>En desarrollo</h1>
    </Layout>
  );
};

export default ProjectsPage;
