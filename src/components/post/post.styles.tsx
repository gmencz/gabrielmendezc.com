import styled from 'styled-components';

export const Post = styled.article`
  margin-bottom: 3.5rem;

  a {
    color: black;
    text-decoration: none;

    &:first-of-type:hover {
      text-decoration: underline;
    }
  }

  & > div:first-of-type {
    margin: 0.65rem 0;
    display: flex;
    align-items: center;

    @media screen and (max-width: 460px) {
      flex-direction: column;
      align-items: flex-start;

      small > span {
        display: none;
      }
    }
  }

  time {
    margin-right: 10px;
    font-size: 1rem;
  }

  small {
    span {
      margin-right: 10px;
    }

    font-size: 1rem;
  }

  p {
    color: ${props => props.theme.colorSecondary};
    font-size: 1.15rem;
    margin-right: 5px;
  }
`;
