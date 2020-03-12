import { RouterProps } from '@reach/router';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useLayoutQuery } from '../../hooks/useLayoutQuery';
import Header from '../Header';
import { GlobalStyles } from '../../shared/css/globalStyles';
import { MDXProvider } from '@mdx-js/react';
import { CodeIndicatorTitle } from '../mdx/code-indicator-title/code-indicator-title.styles';
import { Footer } from '../footer/footer.component';

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

  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;

type LayoutProps = React.ReactNode &
  RouterProps & { noSubscribeForm?: boolean };

const Layout: React.FC<LayoutProps> = ({ children, noSubscribeForm }) => {
  const { site } = useLayoutQuery();
  const { title } = site.siteMetadata;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header siteTitle={title} />
      <MainLayout>
        <MDXProvider components={{ CodeIndicatorTitle }}>
          {children}
        </MDXProvider>
      </MainLayout>
      <Footer noSubscribeForm={noSubscribeForm} />
    </ThemeProvider>
  );
};

export default Layout;
