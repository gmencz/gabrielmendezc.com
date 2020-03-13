import React from 'react';
import Layout from '../components/Layout';
import { RouterProps } from '@reach/router';
import { SEO } from '../components/SEO';
import { UnderDevelopment } from '../components/under-development/under-development.component';

const ProjectsPage: React.FC<RouterProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO
        customTitle="Proyectos | Gabriel Méndez C."
        customDescription="Proyectos de código abierto (Open Source) por Gabriel Méndez C."
      />
      <UnderDevelopment />
    </Layout>
  );
};

export default ProjectsPage;
