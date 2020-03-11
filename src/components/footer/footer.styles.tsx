import styled from 'styled-components';
import { Link } from 'gatsby';

export const Footer = styled.footer`
  max-width: 800px;
  margin: auto auto 0 auto;
  padding: 40px;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;

export const SubscribeForm = styled.form`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SubscribeFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  &:not(:last-of-type) {
    margin-right: 12px;
    flex-grow: 1;
  }

  & > label {
    margin-bottom: 0.45rem;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;

    &:not(:last-of-type) {
      margin-right: 0;
    }
  }
`;

export const FooterInternalLink = styled(Link)`
  color: ${props => props.theme.colorSecondary};
`;

export const FooterMedia = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;

  & > div {
    a:not(:last-of-type) {
      margin-right: 16px;
      color: ${props => props.theme.colorSecondary};
      transition: color 300ms ease-in-out;

      &:hover {
        color: ${props => props.theme.linkColor};
      }
    }
  }

  small {
    font-size: 1rem;
    color: ${props => props.theme.colorSecondary};
  }
`;
