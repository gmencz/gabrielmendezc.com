import { object, string } from 'yup';

export const letsTalkValidationSchema = object({
  name: string()
    .max(255, 'Nombre demasiado largo')
    .required('Nombre obligatorio')
    .min(2, 'Nombre demasiado corto'),
  email: string()
    .email('Introduce un email válido')
    .required('Email obligatorio'),
  subject: string()
    .min(4)
    .max(255, 'Asunto demasiado largo')
    .required('Asunto obligatorio'),
  body: string()
    .min(10, 'Mensaje demasiado corto')
    .max(2048, 'Mensaje demasiado largo')
    .required('Mensaje obligatorio')
});
