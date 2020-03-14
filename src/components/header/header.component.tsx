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
        <Link to="/">@gabrielmendezc</Link>
        <nav>
          <SC.NavigationList>
            <li>
              <Link activeClassName="active" to="/about">
                sobre mí
              </Link>
            </li>
            <li>
              <Link partiallyActive activeClassName="active" to="/blog">
                blog
              </Link>
            </li>
            <li>
              <Link activeClassName="active" to="/projects">
                proyectos
              </Link>
            </li>
            <li>
              <Link activeClassName="active" to="/lets-talk">
                hablemos
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
