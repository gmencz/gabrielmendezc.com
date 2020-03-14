import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Paragraph,
  ExternalLink
} from '../shared-styles/shared-styles.component';
import { GhRepo } from '../gh-repo/gh-repo.component';
import { Spinner } from '../spinner/spinner.component';

export const GhRepos: React.FC = () => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          'https://api.github.com/users/gabrielmendezc/repos?per_page=7&sort=created_at'
        );

        setLoading(false);
        setRepos(response.data);
      } catch (error) {
        setLoading(false);
        setError(error.response);
      }
    })();
  }, []);

  if (loading) return <Spinner />;
  if (error) return <Paragraph style={{ color: 'red' }}>{error}</Paragraph>;

  return (
    <section>
      {repos.map(({ name, html_url, description, language }) => (
        <GhRepo
          key={html_url}
          repoDescription={description}
          repoName={name}
          repoUrl={html_url}
          language={language}
        />
      ))}
      <ExternalLink href="https://github.com/gabrielmendezc?tab=repositories">
        Puedes ver más de mis proyectos en GitHub
      </ExternalLink>
    </section>
  );
};
