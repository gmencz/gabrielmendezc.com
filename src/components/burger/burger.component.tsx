import React, { useState } from 'react';
import * as SC from './burger.styles';
import { Link } from 'gatsby';

export const Burger: React.FC = () => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  return (
    <SC.BurgerWrapper>
      <SC.Burger
        aria-haspopup="true"
        aria-label="Abrir menú"
        aria-controls="menu"
        aria-expanded={isNavigationOpen ? 'true' : 'false'}
        className={isNavigationOpen ? 'open' : undefined}
        onClick={() => {
          if (!isNavigationOpen) {
            document.documentElement.style.overflow = 'hidden';
          } else {
            document.documentElement.style.overflow = '';
          }
          setIsNavigationOpen(!isNavigationOpen);
        }}
      ></SC.Burger>
      <SC.BurgerNavigationWrapper
        className={isNavigationOpen ? 'open' : undefined}
      >
        <SC.BurgerNavigation className={isNavigationOpen ? 'open' : undefined}>
          <li>
            <Link activeClassName="active" to="/">
              inicio
            </Link>
          </li>
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
              háblame
            </Link>
          </li>
        </SC.BurgerNavigation>
      </SC.BurgerNavigationWrapper>
    </SC.BurgerWrapper>
  );
};
