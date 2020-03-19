import { RouterProps } from '@reach/router';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useLayoutQuery } from '../../hooks/useLayoutQuery';
import Header from '../header/header.component';
import { GlobalStyles } from '../../shared/css/globalStyles';
import { MDXProvider } from '@mdx-js/react';
import { CodeIndicatorTitle } from '../mdx/code-indicator-title/code-indicator-title.styles';
import { Footer } from '../footer/footer.component';

interface ThemeProps {
  purple: string;
  blue: string;
  lightblue: string;
  blue2: string;
  yellow: string;
  pink: string;
  vape: string;
}

const theme: ThemeProps = {
  purple: '#b066ff',
  blue: '#203447',
  lightblue: '#1f4662',
  blue2: '#1c2f40',
  yellow: '#ffc600',
  pink: '#eb4471',
  vape: '#d7d7d7'
};

const MainLayout = styled.main`
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
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
