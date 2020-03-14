import { RouterProps } from '@reach/router';
import * as React from 'react';
import Layout from '../components/layout/layout.component';
import Typist from 'react-typist';
import styled from 'styled-components';
import Listing from '../components/listing/listing.component';
import { SEO } from '../components/seo/seo.component';

export const NameHeading = styled.h1`
  color: rgb(26, 32, 44);
  letter-spacing: -0.03rem;
  font-size: 1.45rem;
  line-height: 1.4;
  font-weight: bold;
  display: inline;
`;

export const DescriptionHeading = styled.div`
  color: ${props => props.theme.subColor};
  letter-spacing: -0.03rem;
  font-size: 1.33rem;
  display: inline;
  line-height: 1.45;
`;

const StyledTypist = styled(Typist)`
  margin-bottom: 143px;

  span.Cursor--blinking {
    animation-name: blinker;
    animation-duration: 0.7s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;

    @keyframes blinker {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;

const BlogHeading = styled.h2`
  color: ${props => props.theme.colorSecondary};
  font-size: 0.985rem;
  line-height: 1.45rem;
  margin-bottom: 2.65rem;
  font-weight: bold;
  color: #4a5568;
  text-transform: uppercase;
  -webkit-letter-spacing: 0.12em;
  -moz-letter-spacing: 0.12em;
  -ms-letter-spacing: 0.12em;
  letter-spacing: 0.12em;
`;

const IndexPage: React.FC<RouterProps> = ({ location }) => (
  <Layout location={location}>
    <SEO />
    <section style={{ marginTop: 48 }}>
      <StyledTypist
        avgTypingDelay={40}
        startDelay={1000}
        cursor={{ hideWhenDone: true, hideWhenDoneDelay: 250 }}
      >
        <NameHeading>Hola, soy Gabriel Méndez.</NameHeading>
        <StyledTypist.Delay ms={350} />
        <DescriptionHeading>
          {' '}
          <span>Desarrollo</span>
          <span>
            {' '}
            software de calidad que ayuda a hacer del mundo un lugar mejor.
          </span>
        </DescriptionHeading>
      </StyledTypist>
      <BlogHeading>Te puede interesar</BlogHeading>
      <Listing />
    </section>
  </Layout>
);

export default IndexPage;
