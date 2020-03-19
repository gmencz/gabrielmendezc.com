import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

interface SharedProps {
  fontSizeRem?: number;
  margin?: string;
}

interface ButtonProps {
  loading?: 'true' | 'false';
  fullWidth?: boolean;
}

interface InputProps {
  fullWidth?: boolean;
  error?: boolean;
}

interface TextAreaProps {
  error?: boolean;
}

export const ParagraphHeading = styled.p<SharedProps>`
  color: ${props => props.theme.vape};
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
  color: ${props => props.theme.pink};
`;

export const Paragraph = styled.p`
  color: ${props => props.theme.vape};
  font-size: 1.15rem;

  strong {
    color: #fff;
  }
`;

export const ExternalLink = styled.a`
  font-size: 1.15rem;
  color: ${props => props.theme.pink};
  line-height: 1.7;
`;

export const UnrelatedContent = styled.aside`
  border-left: 1px solid ${props => props.theme.yellow};
  padding-left: 1rem;

  & > p:first-of-type {
    font-style: italic;
    font-size: 1.15rem;
    margin-bottom: 1.25rem;
    color: #fff;
  }

  & > ul {
    list-style-type: none;

    li {
      font-size: 1.1rem;
      margin-bottom: 0.75rem;
    }
  }
`;

export const TextArea = styled.textarea<TextAreaProps>`
  padding: 0.4rem 0.55rem;
  border: ${props =>
    props.error ? '2px solid red' : '2px solid rgb(237, 242, 247)'};
  border-radius: 4px;
  font-size: 1.1rem;
  color: ${props => props.theme.colorPrimary};
  outline: none;
  &:focus {
    border-color: ${props => props.theme.subColor};
  }
`;

export const ErrorAtInput = styled.strong`
  color: red;
  display: block;
  margin-top: 1rem;
  font-weight: 400;
`;

export const Input = styled.input<InputProps>`
  padding: 0.4rem 0.55rem;
  border: ${props =>
    props.error ? '2px solid red' : '2px solid rgb(237, 242, 247)'};
  border-radius: 4px;
  font-size: 1.1rem;
  outline: none;
  width: 100%;
  max-width: ${props => (props.fullWidth ? '100%' : '400px')};
  color: ${props => props.theme.colorPrimary};

  &:focus {
    border-color: ${props => props.theme.yellow};
  }
`;

export const Label = styled.label`
  color: ${props => props.theme.colorPrimary};
  font-size: 1.15rem;
  font-weight: 500;
`;

export const Button = styled.button<ButtonProps>`
  padding: 0.4rem 1rem;
  cursor: pointer;
  border: 2px solid ${props => props.theme.pink};
  background-color: ${props => props.theme.pink};
  color: white;
  width: 100%;
  max-width: ${props => (props.fullWidth ? '100%' : '225px')};
  border-radius: 4px;
  font-weight: 600;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  transition: transform 300ms ease-in-out;

  &:hover {
    transform: scale(1.04);
  }

  ${props =>
    props.loading === 'true' &&
    css`
      pointer-events: none;

      &::after {
        content: '';
        margin-left: 12px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 1px solid #fff;
        border-top-color: ${props => props.theme.pink};
        animation: spinner 0.6s linear infinite;
      }

      @keyframes spinner {
        to {
          transform: rotate(360deg);
        }
      }
    `}

  @media screen and (max-width: 440px) {
    max-width: 100%;
  }
`;
