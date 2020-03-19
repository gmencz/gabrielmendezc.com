import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  max-width: 900px;
  justify-content: space-between;
  padding: 55px 40px;
  width: 100%;
  margin: 0 auto;
  align-items: center;

  & > a {
    font-weight: bold;
    color: ${props => props.theme.pink};
    font-size: 1.1rem;
  }

  @media screen and (max-width: 768px) {
    padding: 44px 6px 44px 20px;
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
    color: ${props => props.theme.pink};
    font-size: 1.1rem;
    position: relative;

    &.active {
      border-bottom: 5px dotted ${props => props.theme.yellow};

      &::after {
        display: block;
      }
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
