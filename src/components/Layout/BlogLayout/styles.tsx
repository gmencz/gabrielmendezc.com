import styled from 'styled-components';
import { InternalLink } from '../../SharedStyles';

export const Footer = styled.footer``;

export const ChangePageLink = styled(InternalLink)`
  transition: all 250ms ease-in-out;

  &:hover {
    color: ${props => props.theme.colorPrimary} !important;
    border-bottom: 1px solid ${props => props.theme.colorPrimary} !important;
  }
`;
