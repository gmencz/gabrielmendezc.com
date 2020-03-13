import styled from 'styled-components';

export const RepoWrapper = styled.article`
  margin-bottom: 2rem;
  border-bottom: 1px solid rgb(210, 222, 220);
`;

export const RepoTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

export const RepoLink = styled.a`
  color: ${props => props.theme.colorPrimary};
  padding: 1.5rem 0;
  display: block;

  &:hover > h2 {
    text-decoration: underline;
  }

  & > div:first-of-type {
    display: flex;
    justify-content: space-between;

    svg {
      width: 32px;
      height: 32px;
    }
  }

  & > p {
    margin-right: 48px;
    color: ${props => props.theme.colorSecondary};
  }
`;
