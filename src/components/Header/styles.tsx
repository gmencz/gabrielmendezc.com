import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  max-width: 800px;
  justify-content: space-between;
  padding: 55px 40px;
  margin: 0 auto;
  align-items: center;

  & > a {
    color: ${props => props.theme.colorPrimary};
    font-size: 1.1rem;
    font-weight: bold;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;

  li:not(:last-of-type) {
    margin-right: 32px;
  }

  a {
    color: ${props => props.theme.colorSecondary};
    font-size: 1.05rem;
    transition: color 200ms ease-in-out;

    &:hover {
      color: ${props => props.theme.subColor};
    }

    &.active {
      color: ${props => props.theme.linkColor};
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
