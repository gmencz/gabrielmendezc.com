import React from 'react';
import * as SC from './post.styles';
import { Link } from 'gatsby';
import { InternalLink } from '../shared-styles/shared-styles.component';

interface PostProps {
  path: string;
  title: string;
  timeToRead: number;
  date: string;
  excerpt?: string;
}

export const Post: React.FC<PostProps> = ({
  path,
  title,
  timeToRead,
  date,
  excerpt
}) => (
  <SC.Post>
    <Link to={`/blog${path}`}>
      <h3>{title}</h3>
    </Link>
    <div>
      <time dateTime={date}>{date}</time>
      <small>
        <span>•</span> {timeToRead} {timeToRead > 1 ? 'minutos' : 'minuto'} de
        lectura
      </small>
    </div>
    <p>{excerpt}</p>
    <InternalLink to={`/blog${path}`}>Sigue leyendo →</InternalLink>
  </SC.Post>
);
