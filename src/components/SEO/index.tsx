import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { useLayoutQuery } from '../../hooks/useLayoutQuery';
import { SchemaOrg } from './SchemaOrg';

interface SEOProps {
  siteMetadata: {
    title: string;
    description: string;
    keywords: string;
    image: string;
    url: string;
    author: string;
    social: {
      twitter: string;
    };
  };
  isBlogPost: boolean;
  postMeta: {
    description: string;
    title: string;
    keywords: string;
    image: string;
    path: string;
  } | null;
}

export const SEO: React.FC<SEOProps> = ({
  siteMetadata,
  postMeta,
  isBlogPost
}) => {
  const meta = isBlogPost ? postMeta : siteMetadata;
  const url = isBlogPost
    ? siteMetadata.url
    : `${siteMetadata.url}/blog/${postMeta?.path}`;

  return (
    <Fragment>
      <Helmet>
        {/* General tags */}
        <title>{meta?.title}</title>
        <meta name="description" content={meta?.description} />
        <meta name="image" content={meta?.image} />
        <meta name="keywords" content={meta?.keywords} />

        {/* OpenGraph tags */}
        <meta property="og:url" content={url} />
        {isBlogPost ? <meta property="og:type" content="article" /> : null}
        <meta property="og:title" content={meta?.title} />
        <meta property="og:description" content={meta?.description} />
        <meta property="og:image" content={meta?.image} />

        {/* Twitter card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={siteMetadata.social.twitter} />
        <meta name="twitter:title" content={meta?.title} />
        <meta name="twitter:description" content={meta?.description} />
        <meta name="twitter:image" content={meta?.image} />
      </Helmet>
      <SchemaOrg
        author={siteMetadata.author}
        canonicalUrl={siteMetadata.url}
        defaultTitle={siteMetadata.title}
        description={meta!.description}
        image={meta!.image}
        isBlogPost={isBlogPost}
        title={meta!.title}
        url={url}
      />
    </Fragment>
  );
};

interface SEOWithQueryProps {
  isBlogPost: boolean;
  postMeta?: {
    description: string;
    title: string;
    keywords: string;
    image: string;
    path: string;
  };
}

const SEOWithQuery: React.FC<SEOWithQueryProps> = ({
  isBlogPost,
  postMeta
}) => {
  const {
    site: { siteMetadata }
  } = useLayoutQuery();

  return (
    <SEO
      siteMetadata={siteMetadata}
      isBlogPost={isBlogPost}
      postMeta={postMeta ? postMeta : null}
    />
  );
};

export default SEOWithQuery;
