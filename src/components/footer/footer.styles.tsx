import styled from 'styled-components';
import { Link } from 'gatsby';

interface SubscribeFormGroupProps {
  marginBottom?: number;
}

export const Footer = styled.footer`
  max-width: 900px;
  margin: auto auto 0 auto;
  width: 100%;
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

export const SubscribeFormGroup = styled.div<SubscribeFormGroupProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: ${props =>
    props.marginBottom ? `${props.marginBottom}px` : 0};

  &:not(:last-of-type) {
    margin-right: 12px;
    flex-grow: 1;
  }

  & > label {
    margin-bottom: 0.45rem;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: ${props =>
      props.marginBottom ? `${props.marginBottom}px` : '1rem'};

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
    a:visited {
      color: ${props => props.theme.colorSecondary};
      transition: color 300ms ease-in-out;
      &:hover {
        color: ${props => props.theme.linkColor};
      }
    }

    a:not(:last-of-type) {
      margin-right: 16px;
    }
  }

  small {
    font-size: 1rem;
    color: ${props => props.theme.colorSecondary};
  }
`;
