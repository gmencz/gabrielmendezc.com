import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import * as React from 'react';

const Image: React.FC = () => {
  const { placeholderImage } = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Img fluid={placeholderImage.childImageSharp.fluid} />;
};
export default Image;
