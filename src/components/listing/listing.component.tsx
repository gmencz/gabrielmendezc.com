import React, { Fragment } from 'react';
import { useListingQuery } from '../../hooks/useListingQuery';
import { Post } from '../post/post.component';

const Listing = () => {
  const { allMdx } = useListingQuery();

  return (
    <Fragment>
      {allMdx &&
        allMdx.edges &&
        allMdx.edges.map(({ node }) => {
          const { path, title, date } = node.frontmatter;
          return (
            <Post
              key={path}
              date={date}
              excerpt={node.excerpt}
              path={path}
              title={title}
              timeToRead={node.timeToRead}
            />
          );
        })}
    </Fragment>
  );
};

export default Listing;
