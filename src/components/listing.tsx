import { Link } from "gatsby";
import React, { Fragment } from "react";
import styled from "styled-components";
import { useListingQuery } from "../hooks/useListingQuery";

const Post = styled.article`
  border-radius: 0.4rem;
  margin-bottom: 1rem;

  a {
    color: black;
    text-decoration: none;
  }

  & > div:first-of-type {
    margin: 0.65rem 0;
    display: flex;
    align-items: center;
    font-family: "Px Grotesk Bold", sans-serif;
  }

  time {
    margin-right: 10px;
    font-size: 1rem;
  }

  small {
    span {
      margin-right: 10px;
    }

    font-size: 1rem;
  }

  p {
    font-family: "Px Grotesk Regular", sans-serif;
    color: ${props => props.theme.colorSecondary};
    font-size: 1.15rem;
    margin-right: 5px;
    display: inline;
  }
`;

const ReadMoreLink = styled(Link)`
  font-size: 1.15rem;
  font-family: "Px Grotesk Regular", sans-serif;
  color: ${props => props.theme.linkColor} !important;
  border-bottom: 1px dotted #2b6cb0;
  padding-bottom: 0.15rem;
`;

const Listing = () => {
  const { allMdx } = useListingQuery();

  return (
    <Fragment>
      {allMdx &&
        allMdx.edges &&
        allMdx.edges.map(({ node }) => {
          const { path, title, date } = node.frontmatter;
          return (
            <Post key={path}>
              <Link to={`/blog${path}`}>
                <h3>{title}</h3>
              </Link>
              <div>
                <time dateTime={date}>{date}</time>
                <small>
                  <span>•</span> {node.timeToRead}{" "}
                  {node.timeToRead > 1 ? "minutos" : "minuto"} de lectura
                </small>
              </div>
              <p>{node.excerpt}</p>
              <ReadMoreLink to={`/blog${path}`}>Sigue leyendo →</ReadMoreLink>
            </Post>
          );
        })}
    </Fragment>
  );
};

export default Listing;
