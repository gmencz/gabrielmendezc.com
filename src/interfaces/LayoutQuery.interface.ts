export interface Site {
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
}

export interface LayoutQueryData {
  site: Site;
}
