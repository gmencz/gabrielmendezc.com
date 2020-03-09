import { EdgeNode } from './EdgeNode.interface';

export interface Post {
  path: string;
  title: string;
  description: string;
  image: string;
  keywords: string;
  date: string;
}

export interface PostsQueryData {
  allMdx: {
    edges?: [EdgeNode<Post>];
  };
}
