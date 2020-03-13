import React, { Fragment } from 'react';
import { InternalLink, Paragraph } from '../SharedStyles';

export const UnderDevelopment: React.FC = () => (
  <Fragment>
    <h1 style={{ marginBottom: '1.5rem' }}>Página en desarrollo</h1>
    <Paragraph>
      Mientras desarrollo esta página, puedes echarle un vistazo a{' '}
      <InternalLink to="/blog">mi blog</InternalLink> y volver más tarde.
    </Paragraph>
  </Fragment>
);
