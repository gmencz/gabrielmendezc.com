import * as React from 'react';
import * as SC from './styles';

interface HeaderProps {
  siteTitle: string;
}

const Header: React.FC<HeaderProps> = () => (
  <SC.HeaderWrapper>
    <SC.HeaderContainer></SC.HeaderContainer>
  </SC.HeaderWrapper>
);

export default Header;
