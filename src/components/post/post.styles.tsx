import styled from 'styled-components';

export const Post = styled.article`
  margin-bottom: 3.5rem;

  h3 {
    color: ${props => props.theme.pink};
  }

  a:last-of-type {
    color: #fff;
    padding-bottom: 5px;
    transition: all 300ms ease-in-out;
    border-bottom: 5px dotted ${props => props.theme.yellow};

    &:hover {
      color: ${props => props.theme.yellow};
      border-bottom: 5px dotted ${props => props.theme.pink};
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
    color: #fff;
  }

  small {
    span {
      margin-right: 10px;
    }

    color: #fff;
    font-size: 1rem;
  }

  p {
    color: ${props => props.theme.vape};
    font-size: 1.15rem;
    margin-right: 5px;
    margin-bottom: 10px;
  }
`;
