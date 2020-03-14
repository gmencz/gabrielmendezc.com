import * as React from 'react';
import Layout from '../components/Layout';
import { RouterProps } from '@reach/router';
import { SEO } from '../components/SEO';
import {
  Paragraph,
  ExternalLink,
  InternalLink,
  UnrelatedContent
} from '../components/SharedStyles';

const AboutPage: React.FC<RouterProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO
        customTitle="Sobre Gabriel Méndez C."
        customDescription="Todo sobre Gabriel Méndez C."
      />
      <h1>Hola! soy Gabriel</h1>
      <h2
        style={{
          color: 'rgb(113, 128, 150)',
          fontWeight: 400,
          fontSize: '1.33rem',
          margin: '1.5rem 0'
        }}
      >
        Desarrollador de software, autónomo y entusiasta.
      </h2>
      <Paragraph style={{ marginBottom: '1.5rem' }}>
        Graduado en sistemas microinformáticos y redes en el centro de fomento{' '}
        <ExternalLink
          style={{ lineHeight: 1 }}
          href="https://www.fomento.edu/montecastelo/"
        >
          Montecastelo
        </ExternalLink>{' '}
        con un énfasis en el <strong>desarrollo de software</strong>, aunque es
        cierto que la mayor parte del tiempo se lo dedico al desarrollo de
        software, las <strong>redes</strong> también me apasionan, es más, tengo
        pensado combinar estas dos pasiones e idear algo interesante!{' '}
        <span role="img" aria-label="guiño de ojo">
          😉
        </span>
      </Paragraph>
      <Paragraph style={{ marginBottom: '1.5rem' }}>
        Me encanta <strong>aprender</strong> y{' '}
        <strong>enseñar nuevas tecnologías</strong>, opino que como
        desarrollador, eres un "estudiante para siempre", la tecnología se
        desarrolla muy rápido y constantemente por lo que debemos mantenernos
        actualizados si queremos ser relevantes en este mundillo,{' '}
        <InternalLink to="/blog">mi blog</InternalLink> puede ayudarte con esto!
      </Paragraph>
      <Paragraph style={{ marginBottom: '1.5rem' }}>
        Aún recuerdo cuando hice mi primera página web, ningún tipo de{' '}
        <strong>accessibilidad, ingresos, tráfico, SEO</strong>... Nada de eso
        me importaba, la idea de publicar una web me fascinaba, descubrir como
        el despliegue de aplicaciones funcionaba, como apuntar un dominio a mi
        página web, etc... fue el comienzo de todo, me llevó a hacer un blog, mi
        propia red social, empezar como autónomo y más importante, me ha llevado
        hasta aquí!
      </Paragraph>
      <Paragraph style={{ marginBottom: '1.5rem' }}>
        Actualmente trabajo como <strong>desarrollador web autónomo</strong>,
        pero estoy interesado en ofertas y desafíos, no te cortes y{' '}
        <InternalLink to="/lets-talk">tengamos una conversación!</InternalLink>
      </Paragraph>
      <UnrelatedContent>
        <p>
          P.D. Aquí están algunas de mis tecnologías favoritas{' '}
          <span role="img" aria-label="apuntando hacia abajo">
            👇
          </span>
        </p>
        <ul>
          <li>
            <ExternalLink href="https://www.typescriptlang.org/">
              Typescript
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://reactjs.org/">React</ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://www.gatsbyjs.org/">Gatsby</ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://nodejs.org/">Node</ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://graphql.org/">GraphQL</ExternalLink>
          </li>
        </ul>
      </UnrelatedContent>
    </Layout>
  );
};

export default AboutPage;
