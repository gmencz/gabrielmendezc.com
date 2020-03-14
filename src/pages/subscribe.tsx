import React, { Fragment, useState } from 'react';
import Layout from '../components/layout/layout.component';
import { RouterProps } from '@reach/router';
import { SEO } from '../components/seo/seo.component';
import * as SC from '../components/footer/footer.styles';
import {
  Label,
  Input,
  Button
} from '../components/shared-styles/shared-styles.component';
import addToMailChimp from 'gatsby-plugin-mailchimp';

const SubscribePage: React.FC<RouterProps> = ({ location }) => {
  const [sentEmailSuccessfully, setSentEmailSuccessfully] = useState(false);
  const [errorOnMail, setErrorOnMail] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const submitHandler = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    setLoading(true);
    const res = await addToMailChimp(formData.email, {
      FNAME: formData.name || 'Desconocido'
    });
    setLoading(false);

    if (res.result === 'error') {
      res.msg.includes('already subscribed')
        ? setErrorOnMail('Ya estás suscrito a mi boletín')
        : setErrorOnMail('Ha ocurrido un error inesperado');
      return;
    }

    setSentEmailSuccessfully(true);
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  return (
    <Layout noSubscribeForm location={location}>
      <SEO
        customTitle="Subscríbete | Gabriel Méndez C."
        customDescription="Subscríbete al boletín de Gabriel Méndez C. para mantenerte actualizado sobre novedades acerca del desarrollo de software."
      />
      <Fragment>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '2rem' }}>
          {sentEmailSuccessfully
            ? 'Gracias por subscribirte, comprueba tu email para verificar que te has suscrito.'
            : 'Recibe emails de mí acerca del desarrollo de software y nuevas tecnologías'}
        </h2>
        {!sentEmailSuccessfully && (
          <Fragment>
            <SC.SubscribeForm onSubmit={evt => submitHandler(evt)}>
              <SC.SubscribeFormGroup>
                <Label htmlFor="name">Nombre</Label>
                <Input
                  name="name"
                  id="name"
                  type="text"
                  aria-label="tu nombre"
                  aria-required="false"
                  placeholder="Juan"
                  onChange={evt => handleChange(evt)}
                />
              </SC.SubscribeFormGroup>
              <SC.SubscribeFormGroup>
                <Label htmlFor="email">Email</Label>
                <Input
                  name="email"
                  id="email"
                  type="email"
                  aria-label="tu email"
                  aria-required="true"
                  placeholder="juan@ejemplo.com"
                  onChange={evt => handleChange(evt)}
                />
              </SC.SubscribeFormGroup>
              <SC.SubscribeFormGroup>
                <Button
                  disabled={loading}
                  loading={loading ? 'true' : 'false'}
                  aria-label="enviar"
                  type="submit"
                >
                  Enviar
                </Button>
              </SC.SubscribeFormGroup>
            </SC.SubscribeForm>
            <strong
              style={{ color: 'red', marginTop: '1rem', display: 'block' }}
            >
              {errorOnMail && errorOnMail}
            </strong>
          </Fragment>
        )}
      </Fragment>
    </Layout>
  );
};

export default SubscribePage;
