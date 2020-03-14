import React from 'react';
import Layout from '../components/layout/layout.component';
import { RouterProps } from '@reach/router';
import { SEO } from '../components/seo/seo.component';
import { useFormik } from 'formik';
import {
  Input,
  Label,
  TextArea
} from '../components/shared-styles/shared-styles.component';
import { SubscribeFormGroup } from '../components/footer/footer.styles';

const ContactPage: React.FC<RouterProps> = ({ location }) => {
  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      body: ''
    },
    onSubmit: async values => {
      console.log(values);
    }
  });

  return (
    <Layout location={location}>
      <SEO
        customTitle="Háblame | Gabriel Méndez C."
        customDescription="Habla con Gabriel Méndez C. acerca de cualquier tema relacionado con el desarrollo de software."
      />
      <form onSubmit={handleSubmit}>
        <SubscribeFormGroup marginBottom={32}>
          <Label htmlFor="name">Nombre *</Label>
          <Input onChange={handleChange} name="name" id="name" />
        </SubscribeFormGroup>
        <SubscribeFormGroup marginBottom={32}>
          <Label htmlFor="email">Correo electrónico *</Label>
          <Input onChange={handleChange} type="email" name="email" id="email" />
        </SubscribeFormGroup>
        <SubscribeFormGroup marginBottom={32}>
          <Label htmlFor="subject">Asunto *</Label>
          <Input
            onChange={handleChange}
            type="text"
            name="subject"
            id="subject"
          />
        </SubscribeFormGroup>
        <SubscribeFormGroup marginBottom={32}>
          <Label htmlFor="body">Mensaje *</Label>
          <TextArea onChange={handleChange} name="body" id="body" rows={10} />
        </SubscribeFormGroup>
      </form>
    </Layout>
  );
};

export default ContactPage;
