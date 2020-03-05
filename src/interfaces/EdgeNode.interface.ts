export interface EdgeNode<Type> {
  node: {
    frontmatter: { [Property in keyof Type]: Type[Property] };
    timeToRead: number;
    excerpt?: string;
  };
}
