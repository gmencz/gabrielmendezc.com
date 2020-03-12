import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

interface SharedProps {
  fontSizeRem?: number;
  margin?: string;
}

interface ButtonProps {
  loading?: boolean;
}

export const ParagraphHeading = styled.p<SharedProps>`
  color: rgb(113, 128, 150);
  -webkit-letter-spacing: -0.03rem;
  -moz-letter-spacing: -0.03rem;
  -ms-letter-spacing: -0.03rem;
  letter-spacing: -0.03rem;
  margin: ${props => (props.margin ? props.margin : 0)};
  font-size: ${props =>
    props.fontSizeRem ? `${props.fontSizeRem}rem` : `1.33rem`};
  line-height: 1.45;
`;

export const InternalLink = styled(Link)`
  font-size: 1.15rem;
  color: ${props => props.theme.linkColor} !important;
  border-bottom: 1px dotted #2b6cb0;
  padding-bottom: 0.15rem;
`;

export const Paragraph = styled.p`
  color: ${props => props.theme.colorSecondary};
  font-size: 1.15rem;
`;

export const ExternalLink = styled.a`
  font-size: 1.15rem;
  color: ${props => props.theme.linkColor} !important;
  border-bottom: 1px dotted #2b6cb0;
  padding-bottom: 0.15rem;
  line-height: 1.7;
`;

export const UnrelatedContent = styled.aside`
  border-left: 3px solid ${props => props.theme.subColor};
  padding-left: 1rem;

  & > p:first-of-type {
    font-style: italic;
    color: rgb(26, 32, 44);
    font-size: 1.15rem;
    margin-bottom: 1.25rem;
  }

  & > ul {
    margin-left: 1rem;

    li {
      font-size: 1.1rem;
      margin-bottom: 0.75rem;
    }
  }
`;

export const Input = styled.input`
  padding: 0.4rem 0.55rem;
  border: 2px solid rgb(237, 242, 247);
  border-radius: 4px;
  font-size: 1.1rem;
  outline: none;
  transition: border-color 300ms ease-in-out;
  color: ${props => props.theme.colorPrimary};

  &:focus {
    border-color: ${props => props.theme.subColor};
  }
`;

export const Label = styled.label`
  color: ${props => props.theme.colorPrimary};
  font-size: 1.15rem;
`;

export const Button = styled.button<ButtonProps>`
  padding: 0.4rem 1rem;
  cursor: pointer;
  border: 2px solid ${props => props.theme.linkColor};
  background-color: ${props => props.theme.linkColor};
  color: white;
  border-radius: 4px;
  font-weight: 600;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  transition: border-color 300ms ease-in-out, background-color 300ms ease-in-out;

  &:hover {
    background-color: #0e457f;
    border-color: #0e457f;
  }

  ${props =>
    props.loading &&
    css`
      background-color: ${props => props.theme.subColor} !important;
      pointer-events: none;

      &::after {
        content: '';
        box-sizing: border-box;
        margin-left: 12px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 1px solid #fff;
        border-top-color: ${props => props.theme.linkColor};
        animation: spinner 0.6s linear infinite;
      }

      @keyframes spinner {
        to {
          transform: rotate(360deg);
        }
      }
    `}
`;
