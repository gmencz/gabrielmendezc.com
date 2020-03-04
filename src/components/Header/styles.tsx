import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  max-width: 800px;
  justify-content: space-between;
  padding: 40px;
  margin: 0 auto;
  align-items: center;

  h1 {
    color: ${props => props.theme.colorPrimary};
    font-family: 'Px Grotesk Bold', sans-serif;
    font-size: 1.1rem;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;

  li:not(:last-of-type) {
    margin-right: 32px;
  }

  a {
    color: ${props => props.theme.colorSecondary};
    font-family: 'Px Grotesk Bold', sans-serif;
    font-size: 0.9rem;
  }
`;
