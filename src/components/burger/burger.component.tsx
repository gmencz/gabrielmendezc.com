import React, { useState } from 'react';
import * as SC from './burger.styles';
import { Link } from 'gatsby';

export const Burger: React.FC = () => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  const lockScrollbar = () => {
    document.documentElement.style.overflow = 'hidden';
  };

  const unlockScrollbar = () => {
    document.documentElement.style.overflow = '';
  };

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
            lockScrollbar();
          } else {
            unlockScrollbar();
          }
          setIsNavigationOpen(!isNavigationOpen);
        }}
      ></SC.Burger>
      <SC.BurgerNavigationWrapper
        className={isNavigationOpen ? 'open' : undefined}
      >
        <SC.BurgerNavigation className={isNavigationOpen ? 'open' : undefined}>
          <li>
            <Link onClick={unlockScrollbar} activeClassName="active" to="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link
              onClick={unlockScrollbar}
              activeClassName="active"
              to="/about"
            >
              Sobre mí
            </Link>
          </li>
          <li>
            <Link
              onClick={unlockScrollbar}
              partiallyActive
              activeClassName="active"
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              onClick={unlockScrollbar}
              activeClassName="active"
              to="/projects"
            >
              Proyectos
            </Link>
          </li>
          <li>
            <Link
              onClick={unlockScrollbar}
              activeClassName="active"
              to="/lets-talk"
            >
              Hablemos
            </Link>
          </li>
        </SC.BurgerNavigation>
      </SC.BurgerNavigationWrapper>
    </SC.BurgerWrapper>
  );
};
