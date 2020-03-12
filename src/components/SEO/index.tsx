import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { useLayoutQuery } from '../../hooks/useLayoutQuery';
import { SchemaOrg } from './SchemaOrg';

interface InitialSEOProps {
  siteMetadata: {
    title: string;
    description: string;
    keywords: string;
    image: string;
    siteUrl: string;
    author: string;
    social: {
      twitter: string;
    };
  };
  customTitle?: string;
  customDescription?: string;
  isBlogPost?: boolean;
  postMeta: {
    description: string;
    title: string;
    keywords: string;
    image: string;
    path: string;
  } | null;
}

const InitialSEO: React.FC<InitialSEOProps> = ({
  siteMetadata,
  postMeta,
  isBlogPost,
  customTitle,
  customDescription
}) => {
  const meta = isBlogPost ? postMeta : siteMetadata;
  const url = isBlogPost
    ? `${siteMetadata.siteUrl}/blog${postMeta?.path}`
    : siteMetadata.siteUrl;

  const nonPostImageUrl = meta?.image
    .split('/')
    .filter((_, index) => index > 0)
    .join('/');

  const validImageUrl = isBlogPost
    ? `${siteMetadata.siteUrl}${meta?.image}`
    : `${siteMetadata.siteUrl}/${nonPostImageUrl}`;

  return (
    <Fragment>
      <Helmet>
        {/* General tags */}
        <html lang="es" />
        <title>{customTitle ? customTitle : meta?.title}</title>
        <meta
          name="description"
          content={customDescription ? customDescription : meta?.description}
        />
        <meta name="image" content={validImageUrl} />
        <meta name="keywords" content={meta?.keywords} />

        {/* OpenGraph tags */}
        <meta property="og:url" content={url} />
        {isBlogPost ? (
          <meta property="og:type" content="article" />
        ) : (
          <meta property="og:type" content="profile" />
        )}
        <meta
          property="og:title"
          content={customTitle ? customTitle : meta?.title}
        />
        <meta
          property="og:description"
          content={customDescription ? customDescription : meta?.description}
        />
        <meta property="og:image" content={validImageUrl} />

        {/* Twitter card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={siteMetadata.social.twitter} />
        <meta
          name="twitter:title"
          content={customTitle ? customTitle : meta?.title}
        />
        <meta
          name="twitter:description"
          content={customDescription ? customDescription : meta?.description}
        />
        <noscript>Es necesario JavaScript para ver esta página web.</noscript>
        <meta name="twitter:image" content={validImageUrl} />
      </Helmet>
      <SchemaOrg
        author={siteMetadata.author}
        canonicalUrl={siteMetadata.siteUrl}
        defaultTitle={siteMetadata.title}
        description={customDescription ? customDescription : meta!.description}
        image={validImageUrl}
        isBlogPost={!!isBlogPost}
        title={customTitle ? customTitle : meta!.title}
        url={url}
      />
    </Fragment>
  );
};

interface SEOProps {
  isBlogPost?: boolean;
  customTitle?: string;
  customDescription?: string;
  postMeta?: {
    description: string;
    title: string;
    keywords: string;
    image: string;
    path: string;
  };
}

export const SEO: React.FC<SEOProps> = ({
  isBlogPost,
  postMeta,
  customTitle,
  customDescription
}) => {
  const {
    site: { siteMetadata }
  } = useLayoutQuery();

  return (
    <InitialSEO
      customTitle={customTitle}
      siteMetadata={siteMetadata}
      customDescription={customDescription}
      isBlogPost={isBlogPost}
      postMeta={postMeta ? postMeta : null}
    />
  );
};
