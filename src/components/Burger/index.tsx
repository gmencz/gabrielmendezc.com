import React, { Fragment, useState } from 'react';
import * as SC from './styles';
import { Link } from 'gatsby';

export const Burger: React.FC = () => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  return (
    <Fragment>
      <SC.Burger
        className={isNavigationOpen ? 'open' : undefined}
        onClick={() => setIsNavigationOpen(!isNavigationOpen)}
      />
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
    </Fragment>
  );
};