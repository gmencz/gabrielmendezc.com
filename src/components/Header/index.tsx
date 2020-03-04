import * as React from 'react';
import * as SC from './styles';
import { Link } from 'gatsby';

interface HeaderProps {
  siteTitle: string;
}

const Header: React.FC<HeaderProps> = () => (
  <SC.HeaderWrapper>
    <h1>@gabrielmendez</h1>
    <nav>
      <SC.NavigationList>
        <li>
          <Link to="/about">Sobre mí</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/projects">Proyectos</Link>
        </li>
        <li>
          <Link to="/contact">Contacto</Link>
        </li>
      </SC.NavigationList>
    </nav>
  </SC.HeaderWrapper>
);

export default Header;
