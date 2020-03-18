import React, { useState, Fragment } from 'react';
import Layout from '../components/layout/layout.component';
import { RouterProps } from '@reach/router';
import { SEO } from '../components/seo/seo.component';
import { useFormik } from 'formik';
import {
  Input,
  Label,
  TextArea,
  ErrorAtInput,
  Button
} from '../components/shared-styles/shared-styles.component';
import { SubscribeFormGroup } from '../components/footer/footer.styles';
import { letsTalkValidationSchema } from '../shared/validation/lets-talk.validation';
import { apiEndpoint } from '../shared/api.endpoint';
import axios from 'axios';

const ContactPage: React.FC<RouterProps> = ({ location }) => {
  const [sendMailStatus, setSendMailStatus] = useState({
    loading: false,
    error: false,
    sent: false
  });

  const {
    handleSubmit,
    handleChange,
    errors,
    touched,
    handleBlur,
    values
  } = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      body: ''
    },
    validationSchema: letsTalkValidationSchema,
    onSubmit: async values => {
      try {
        setSendMailStatus({
          ...sendMailStatus,
          loading: true,
          error: false,
          sent: false
        });
        const { name, email, subject, body } = values;
        const mailEndpoint = `${apiEndpoint}/v1/mail/send`;

        await axios.post(mailEndpoint, {
          name,
          email,
          subject,
          body
        });

        setSendMailStatus({
          ...sendMailStatus,
          loading: false,
          error: false,
          sent: true
        });
      } catch (error) {
        setSendMailStatus({
          ...sendMailStatus,
          loading: false,
          error: true,
          sent: false
        });
      }
    }
  });

  const { name, email, subject, body } = values;

  return (
    <Layout location={location}>
      <SEO
        customTitle="Hablemos | Gabriel Méndez C."
        customDescription="Habla con Gabriel Méndez C. acerca de cualquier tema relacionado con el desarrollo de software."
      />
      {sendMailStatus.sent &&
      !sendMailStatus.loading &&
      !sendMailStatus.error ? (
        <h1 style={{ fontSize: '1.4rem' }}>
          He recibido tu mensaje, me pondré en contacto contigo cuanto antes!
        </h1>
      ) : (
        <Fragment>
          <h1 style={{ fontSize: '1.4rem', marginBottom: '3rem' }}>
            Completa el formulario a continuación para contactar conmigo:
          </h1>
          <form noValidate onSubmit={handleSubmit}>
            <SubscribeFormGroup marginBottom={32}>
              <Label htmlFor="name">Nombre *</Label>
              <Input
                error={!!errors.name && !!touched.name}
                onChange={handleChange}
                type="text"
                name="name"
                id="name"
                onBlur={handleBlur}
                value={name}
              />
              {!!errors.name && !!touched.name && (
                <ErrorAtInput>{errors.name}</ErrorAtInput>
              )}
            </SubscribeFormGroup>
            <SubscribeFormGroup marginBottom={32}>
              <Label htmlFor="email">Email *</Label>
              <Input
                onChange={handleChange}
                type="email"
                name="email"
                id="email"
                error={!!errors.email && !!touched.email}
                onBlur={handleBlur}
                value={email}
              />
              {!!errors.email && !!touched.email && (
                <ErrorAtInput>{errors.email}</ErrorAtInput>
              )}
            </SubscribeFormGroup>
            <SubscribeFormGroup marginBottom={32}>
              <Label htmlFor="subject">Asunto *</Label>
              <Input
                onChange={handleChange}
                type="text"
                name="subject"
                id="subject"
                error={!!errors.subject && !!touched.subject}
                value={subject}
                onBlur={handleBlur}
              />
              {!!errors.subject && !!touched.subject && (
                <ErrorAtInput>{errors.subject}</ErrorAtInput>
              )}
            </SubscribeFormGroup>
            <SubscribeFormGroup marginBottom={32}>
              <Label htmlFor="body">Mensaje *</Label>
              <TextArea
                onChange={handleChange}
                name="body"
                id="body"
                rows={10}
                value={body}
                error={!!errors.body && !!touched.body}
                onBlur={handleBlur}
              />
              {!!errors.body && !!touched.body && (
                <ErrorAtInput>{errors.body}</ErrorAtInput>
              )}
            </SubscribeFormGroup>
            <SubscribeFormGroup>
              <Button
                loading={sendMailStatus.loading ? 'true' : 'false'}
                aria-label="enviar"
                type="submit"
              >
                Enviar
              </Button>
            </SubscribeFormGroup>
            {sendMailStatus.error && (
              <ErrorAtInput>
                Error del servidor, no se ha podido enviar el correo.
              </ErrorAtInput>
            )}
          </form>
        </Fragment>
      )}
    </Layout>
  );
};

export default ContactPage;
