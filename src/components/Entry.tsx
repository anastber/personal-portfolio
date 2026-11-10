import React from 'react';
import { ArrowUpRight } from './Icons';

interface EntryProps {
  when: string;
  title: React.ReactNode;
  description: string;
  demo?: string;
  ongoing?: string;
  stack: string[];
}

const Entry: React.FC<EntryProps> = ({ when, title, description, demo, ongoing, stack }) => (
  <article className="entry reveal">
    <div className="entry-when">{when}</div>
    <div>
      <h3 className="entry-title display">{title}</h3>
      <p className="entry-text">{description}</p>
      {demo && (
        <a className="entry-demo" href={demo} target="_blank" rel="noopener noreferrer">
          Try the live demo <ArrowUpRight />
        </a>
      )}
      {ongoing && (
        <p className="entry-ongoing">
          <b>Ongoing</b>
          <span>{ongoing}</span>
        </p>
      )}
      <ul className="entry-stack" aria-label="Stack">
        {stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  </article>
);

export default Entry;
