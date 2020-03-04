import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  background: ${props => props.theme.colorPrimary};
  img {
    margin-bottom: 0;
  }
`;

export const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 96rem;
  padding: 1rem;
`;
