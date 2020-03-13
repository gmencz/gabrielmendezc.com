import React from 'react';
import * as SC from './gh-repo.styles';
import { possibleLanguages } from './gh-repo.possible-language';

interface GhRepoProps {
  repoName: string;
  repoUrl: string;
  repoDescription: string;
  language?: keyof typeof possibleLanguages;
}

export const GhRepo: React.FC<GhRepoProps> = ({
  repoName,
  repoUrl,
  repoDescription,
  language
}) => {
  let languageIcon: JSX.Element | undefined;

  if (language) {
    languageIcon = possibleLanguages[language];
  } else {
    languageIcon = possibleLanguages['TypeScript'];
  }

  return (
    <SC.RepoWrapper>
      <SC.RepoLink aria-label="visitar repositorio" href={repoUrl}>
        <div>
          <SC.RepoTitle>{repoName}</SC.RepoTitle>
          {languageIcon}
        </div>
        <p>{repoDescription}</p>
      </SC.RepoLink>
    </SC.RepoWrapper>
  );
};
