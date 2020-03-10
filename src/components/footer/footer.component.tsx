import React from 'react';
import * as SC from './footer.styles';
import { Label, Input, Button } from '../SharedStyles';

export const Footer: React.FC = () => {
  return (
    <SC.Footer>
      <h2 style={{ fontSize: '1.4rem' }}>
        Mantente actualizado en el desarrollo de software.
      </h2>
      <SC.SubscribeForm>
        <SC.SubscribeFormGroup>
          <Label>Nombre</Label>
          <Input placeholder="Juan" />
        </SC.SubscribeFormGroup>
        <SC.SubscribeFormGroup>
          <Label>Email</Label>
          <Input placeholder="juan@example.com" />
        </SC.SubscribeFormGroup>
        <SC.SubscribeFormGroup>
          <Button>Enviar</Button>
        </SC.SubscribeFormGroup>
      </SC.SubscribeForm>
    </SC.Footer>
  );
};
