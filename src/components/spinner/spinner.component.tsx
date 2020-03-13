import React from 'react';
import * as SC from './spinner.styles';

export const Spinner: React.FC = () => (
  <SC.SpinnerWrapper aria-label="cargando proyectos...">
    <div></div>
    <div></div>
    <div></div>
  </SC.SpinnerWrapper>
);
