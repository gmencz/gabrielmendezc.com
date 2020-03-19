import React, { Fragment } from 'react';
import * as SC from './header.styles';
import { Link } from 'gatsby';
import { Burger } from '../burger/burger.component';

interface HeaderProps {
  siteTitle: string;
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <Fragment>
      <SC.HeaderWrapper>
        <Link to="/">Gabriel Méndez C.</Link>
        <nav>
          <SC.NavigationList>
            <li>
              <Link activeClassName="active" to="/about">
                Sobre mí
              </Link>
            </li>
            <li>
              <Link partiallyActive activeClassName="active" to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link activeClassName="active" to="/projects">
                Proyectos
              </Link>
            </li>
            <li>
              <Link activeClassName="active" to="/lets-talk">
                Hablemos
              </Link>
            </li>
          </SC.NavigationList>
        </nav>
        <Burger />
      </SC.HeaderWrapper>
    </Fragment>
  );
};

export default Header;
