import React, { Fragment } from 'react';
import {
  InternalLink,
  ParagraphHeading
} from '../shared-styles/shared-styles.component';

export const UnderDevelopment: React.FC = () => (
  <Fragment>
    <h1 style={{ marginBottom: '1.5rem' }}>Página en desarrollo</h1>
    <ParagraphHeading>
      Mientras desarrollo esta página, puedes echarle un vistazo a{' '}
      <InternalLink style={{ fontSize: '1.33rem' }} to="/blog">
        mi blog
      </InternalLink>{' '}
      y volver más tarde.
    </ParagraphHeading>
  </Fragment>
);
