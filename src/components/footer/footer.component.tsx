import React from 'react';
import * as SC from './footer.styles';
import { Label, Input, Button } from '../SharedStyles';

export const Footer: React.FC = () => {
  // AÑADIR COMPONENTE DE "EN DESARROLLO" PARA PÁGINAS QUE ESTEAN EN DESARROLLO.
  return (
    <SC.Footer>
      <h2 style={{ fontSize: '1.4rem', marginBottom: '2rem' }}>
        Recibe emails de mí acerca del desarrollo de software y nuevas
        tecnologías.
      </h2>
      <SC.SubscribeForm
        onSubmit={e => {
          e.preventDefault();
          alert('En desarrollo');
        }}
      >
        <SC.SubscribeFormGroup>
          <Label htmlFor="name">Nombre</Label>
          <Input
            name="name"
            id="name"
            type="text"
            aria-label="tu nombre"
            placeholder="Juan"
          />
        </SC.SubscribeFormGroup>
        <SC.SubscribeFormGroup>
          <Label>Email</Label>
          <Input
            name="email"
            id="email"
            type="email"
            aria-label="tu email"
            placeholder="juan@example.com"
          />
        </SC.SubscribeFormGroup>
        <SC.SubscribeFormGroup>
          <Button>Enviar</Button>
        </SC.SubscribeFormGroup>
      </SC.SubscribeForm>
    </SC.Footer>
  );
};
