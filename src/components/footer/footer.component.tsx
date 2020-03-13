import React, { useState, Fragment } from 'react';
import * as SC from './footer.styles';
import addToMailChimp from 'gatsby-plugin-mailchimp';
import { Label, Input, Button } from '../SharedStyles';

interface FooterProps {
  noSubscribeForm?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ noSubscribeForm }) => {
  // AÑADIR COMPONENTE DE "EN DESARROLLO" PARA PÁGINAS QUE ESTEAN EN DESARROLLO.
  // REFACTORIZAR CARPETAS Y ARCHIVOS PARA QUE LOS NOMBREN NO USEN MAYÚSCULAS Y LOS
  // COMPONENTES ESTÉN BASADOS EN LA NOMENCLATURA DE ANGULAR (nombre.component.tsx)
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
    <SC.Footer>
      {!noSubscribeForm && (
        <Fragment>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '2rem' }}>
            {sentEmailSuccessfully
              ? 'Gracias por subscribirte, comprueba tu email para verificar que te has suscrito.'
              : 'Recibe emails de mí acerca del desarrollo de software y nuevas tecnologías'}
          </h2>
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
                aria-label="enviar"
                loading={loading ? 'true' : 'false'}
                type="submit"
              >
                Enviar
              </Button>
            </SC.SubscribeFormGroup>
          </SC.SubscribeForm>
          <strong style={{ color: 'red', marginTop: '1rem', display: 'block' }}>
            {errorOnMail && errorOnMail}
          </strong>
        </Fragment>
      )}
      <SC.FooterMedia>
        <small>Gabriel Méndez &copy; {new Date().getFullYear()}</small>
        <div>
          <a
            aria-label="echale un vistazo a mi twitter"
            href="https://twitter.com/gabrielmendezct"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="20"
              viewBox="0 0 24 20"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M24,2.96470588 C23.1,3.40941176 22.2,3.55764706 21.15,3.70588235 C22.2,3.11294118 22.95,2.22352941 23.25,1.03764706 C22.35,1.63058824 21.3,1.92705882 20.1,2.22352941 C19.2,1.33411765 17.85,0.741176471 16.5,0.741176471 C13.95,0.741176471 11.7,2.96470588 11.7,5.63294118 C11.7,6.07764706 11.7,6.37411765 11.85,6.67058824 C7.8,6.52235294 4.05,4.59529412 1.65,1.63058824 C1.2,2.37176471 1.05,3.11294118 1.05,4.15058824 C1.05,5.78117647 1.95,7.26352941 3.3,8.15294118 C2.55,8.15294118 1.8,7.85647059 1.05,7.56 C1.05,7.56 1.05,7.56 1.05,7.56 C1.05,9.93176471 2.7,11.8588235 4.95,12.3035294 C4.5,12.4517647 4.05,12.4517647 3.6,12.4517647 C3.3,12.4517647 3,12.4517647 2.7,12.3035294 C3.3,14.2305882 5.1,15.7129412 7.35,15.7129412 C5.7,17.0470588 3.6,17.7882353 1.2,17.7882353 C0.75,17.7882353 0.45,17.7882353 0,17.7882353 C2.25,19.1223529 4.8,20.0117647 7.5,20.0117647 C16.5,20.0117647 21.45,12.6 21.45,6.22588235 C21.45,6.07764706 21.45,5.78117647 21.45,5.63294118 C22.5,4.89176471 23.4,4.00235294 24,2.96470588 Z"
              ></path>
            </svg>
          </a>
          <a
            aria-label="echale un vistazo a mi instagram"
            href="https://www.instagram.com/gabri.mdzz/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height="23"
              width="23"
            >
              <path
                fill="currentColor"
                d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.868 5.868 0 0 0 4.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 0 0 2.126-1.384 5.86 5.86 0 0 0 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 0 0-1.384-2.126A5.847 5.847 0 0 0 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382 3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899 3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"
              ></path>
            </svg>
          </a>
          <a
            aria-label="echale un vistazo a mi github"
            href="https://github.com/gabrielmendezc"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 23 23"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M11.2941176,0.279031142 C5.08235294,0.279031142 0,5.3015917 0,11.4402768 C0,16.3233218 3.24705882,20.5087889 7.76470588,22.0434602 C8.32941176,22.1829758 8.47058824,21.7644291 8.47058824,21.4853979 C8.47058824,21.2063668 8.47058824,20.5087889 8.47058824,19.5321799 C5.36470588,20.2297578 4.65882353,18.1370242 4.65882353,18.1370242 C4.09411765,16.8813841 3.38823529,16.4628374 3.38823529,16.4628374 C2.4,15.7652595 3.52941176,15.7652595 3.52941176,15.7652595 C4.65882353,15.9047751 5.22352941,16.8813841 5.22352941,16.8813841 C6.21176471,18.6950865 7.90588235,18.1370242 8.47058824,17.8579931 C8.61176471,17.1604152 8.89411765,16.6023529 9.17647059,16.3233218 C6.63529412,16.0442907 4.09411765,15.0676817 4.09411765,10.742699 C4.09411765,9.48705882 4.51764706,8.51044983 5.22352941,7.81287197 C5.08235294,7.53384083 4.65882353,6.41771626 5.36470588,4.88304498 C5.36470588,4.88304498 6.35294118,4.60401384 8.47058824,5.99916955 C9.31764706,5.72013841 10.3058824,5.58062284 11.2941176,5.58062284 C12.2823529,5.58062284 13.2705882,5.72013841 14.1176471,5.99916955 C16.2352941,4.60401384 17.2235294,4.88304498 17.2235294,4.88304498 C17.7882353,6.41771626 17.5058824,7.53384083 17.3647059,7.81287197 C18.0705882,8.6499654 18.4941176,9.62657439 18.4941176,10.742699 C18.4941176,15.0676817 15.8117647,15.9047751 13.2705882,16.1838062 C13.6941176,16.7418685 14.1176471,17.4394464 14.1176471,18.4160554 C14.1176471,19.9507266 14.1176471,21.0668512 14.1176471,21.4853979 C14.1176471,21.7644291 14.2588235,22.1829758 14.9647059,22.0434602 C19.4823529,20.5087889 22.7294118,16.3233218 22.7294118,11.4402768 C22.5882353,5.3015917 17.5058824,0.279031142 11.2941176,0.279031142 Z"
              ></path>
            </svg>
          </a>
          <a aria-label="Accede al rss del blog" href="/blog/rss.xml">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 8 8"
            >
              <circle cx="2" cy="6" r="1" fill="currentColor"></circle>
              <path
                d="m 1,4 a 3,3 0 0 1 3,3 h 1 a 4,4 0 0 0 -4,-4 z"
                fill="currentColor"
              ></path>
              <path
                d="m 1,2 a 5,5 0 0 1 5,5 h 1 a 6,6 0 0 0 -6,-6 z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
        </div>
      </SC.FooterMedia>
    </SC.Footer>
  );
};
