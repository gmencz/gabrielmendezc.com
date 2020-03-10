import styled from 'styled-components';
import { Link } from 'gatsby';

interface SharedProps {
  fontSizeRem?: number;
  margin?: string;
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

export const Input = styled.input``;

export const Label = styled.label``;

export const Button = styled.button``;
