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
