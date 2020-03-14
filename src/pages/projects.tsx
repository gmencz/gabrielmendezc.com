import React from 'react';
import Layout from '../components/layout/layout.component';
import { RouterProps } from '@reach/router';
import { SEO } from '../components/seo/seo.component';
import { ParagraphHeading } from '../components/shared-styles/shared-styles.component';
import { GhRepos } from '../components/gh-repos/gh-repos.component';

const ProjectsPage: React.FC<RouterProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO
        customTitle="Proyectos | Gabriel Méndez C."
        customDescription="Proyectos de código abierto (Open Source) de Gabriel Méndez C."
      />
      <h1 style={{ marginBottom: '1.5rem' }}>Software Open Source</h1>
      <ParagraphHeading style={{ marginBottom: '3rem' }}>
        La mayoría de proyectos en los que trabajo son <em>Open Source</em> ya
        que me encanta contribuír a esta gran{' '}
        <strong>comunidad de desarrolladores</strong>, estos son algunos de mis
        proyectos más recientes:
      </ParagraphHeading>
      <GhRepos />
    </Layout>
  );
};

export default ProjectsPage;
