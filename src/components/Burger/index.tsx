import React, { useState } from 'react';
import * as SC from './styles';
import { Link } from 'gatsby';

export const Burger: React.FC = () => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  return (
    <SC.BurgerWrapper>
      <SC.Burger
        aria-haspopup="true"
        aria-controls="menu"
        aria-expanded={isNavigationOpen ? 'true' : 'false'}
        className={isNavigationOpen ? 'open' : undefined}
        onClick={() => setIsNavigationOpen(!isNavigationOpen)}
      >
        <span>Close Menu</span>
      </SC.Burger>
      <SC.BurgerNavigationWrapper
        className={isNavigationOpen ? 'open' : undefined}
      >
        <SC.BurgerNavigation className={isNavigationOpen ? 'open' : undefined}>
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
            <Link activeClassName="active" to="/contact">
              háblame
            </Link>
          </li>
        </SC.BurgerNavigation>
      </SC.BurgerNavigationWrapper>
    </SC.BurgerWrapper>
  );
};
