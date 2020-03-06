import { RouterProps } from '@reach/router';
import * as React from 'react';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import { useLayoutQuery } from '../hooks/useLayoutQuery';
import './layout.css';
import '../fonts/fonts.css';
import Header from './Header';

interface ThemeProps {
  colorPrimary: string;
  colorSecondary: string;
  subColor: string;
  linkColor: string;
}

const theme: ThemeProps = {
  colorPrimary: '#1a202c',
  colorSecondary: '#4a5568',
  subColor: 'rgb(113, 128, 150)',
  linkColor: '#2b6cb0'
};

const MainLayout = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
`;

type LayoutProps = React.ReactNode & RouterProps;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { site } = useLayoutQuery();

  const { title, description, keywords } = site.siteMetadata;

  return (
    <ThemeProvider theme={theme}>
      <>
        <Helmet
          title={title}
          meta={[
            { name: 'description', content: description },
            { name: 'keywords', content: keywords || undefined }
          ]}
        >
          <html lang="es" />
          <noscript>Es necesario JavaScript para ver esta página web.</noscript>
        </Helmet>
        <Header siteTitle={title} />
        <MainLayout>{children}</MainLayout>
      </>
    </ThemeProvider>
  );
};

export default Layout;
