import React, { Fragment } from 'react';
import * as SC from './styles';
import { Link } from 'gatsby';

interface HeaderProps {
  siteTitle: string;
}

const Header: React.FC<HeaderProps> = () => (
  <Fragment>
    <SC.HeaderWrapper>
      <Link to="/">@gabrielmendez</Link>
      <nav>
        <SC.NavigationList>
          <li>
            <Link activeClassName="active" to="/about">
              sobre mí
            </Link>
          </li>
          <li>
            <Link activeClassName="active" to="/blog">
              blog
            </Link>
          </li>
          <li>
            <Link activeClassName="active" to="/projects">
              proyectos
            </Link>
          </li>
          <li>
            <Link activeClassName="active" to="/contact">
              háblame
            </Link>
          </li>
        </SC.NavigationList>
      </nav>
    </SC.HeaderWrapper>
  </Fragment>
);

export default Header;
