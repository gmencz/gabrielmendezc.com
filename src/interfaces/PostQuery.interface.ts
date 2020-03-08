export interface PostQueryData {
  data: {
    mdx: {
      frontmatter: {
        path: string;
        title: string;
        date: string;
        description: string;
        image: string;
        keywords: string;
      };
    };
  };
}
