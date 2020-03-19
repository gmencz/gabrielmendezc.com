import styled from 'styled-components';

export const CodeIndicatorTitle = styled.h4`
  margin-bottom: 0 !important;
  display: flex;
  justify-content: space-between;

  & > p {
    border-bottom: 5px dotted #2b6cb0;
    padding: 1rem;
    background-color: ${props => props.theme.blue2};
    display: inline;
    margin: 0 !important;
    font-size: 1rem !important;

    &.polyfill {
      border-bottom: 5px dotted red;
    }

    &.no__polyfill {
      border-bottom: 5px dotted #37e325;
    }

    @media screen and (max-width: 345px) {
      font-size: 0.8rem !important;
    }
  }
`;
