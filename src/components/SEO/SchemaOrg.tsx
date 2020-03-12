import React from 'react';
import websiteConfig from '../../../config/website';
import Helmet from 'react-helmet';

interface SchemaOrgProps {
  author: string;
  canonicalUrl: string;
  title: string;
  defaultTitle: string;
  description: string;
  image: string;
  isBlogPost: boolean;
  url: string;
  datePublished?: string;
}

export const SchemaOrg: React.FC<SchemaOrgProps> = ({
  url,
  title,
  defaultTitle,
  image,
  isBlogPost,
  description,
  author,
  canonicalUrl,
  datePublished
}) => {
  const baseSchema = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url,
      name: title,
      alternateName: defaultTitle
    }
  ];

  const schema = isBlogPost
    ? [
        ...baseSchema,
        {
          '@context': 'http://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id': url,
                name: title,
                image
              }
            }
          ]
        },
        {
          '@context': 'http://schema.org',
          '@type': 'BlogPosting',
          url,
          name: title,
          alternateName: defaultTitle,
          headline: title,
          image: {
            '@type': 'ImageObject',
            url: image
          },
          description,
          author: {
            '@type': 'Person',
            name: author || websiteConfig.author
          },
          publisher: {
            '@type': 'Person',
            name: author
          },
          mainEntityOfPage: {
            '@type': 'WebSite',
            '@id': canonicalUrl
          },
          datePublished,
          dateModified: datePublished
        }
      ]
    : baseSchema;

  return (
    <Helmet>
      {/* Schema.org tags */}
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};
