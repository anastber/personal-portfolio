import React from 'react';
import { ArrowUpRight } from './Icons';

interface EntryProps {
  when: string;
  title: React.ReactNode;
  logo?: string;
  description: string;
  demo?: string;
  ongoing?: string;
  stack: string[];
}

const Entry: React.FC<EntryProps> = ({ when, title, logo, description, demo, ongoing, stack }) => (
  <article className="entry reveal">
    <div className="entry-when">{when}</div>
    <div>
      <div className="entry-head">
        {logo && <img className="logo-tile" src={logo} alt="" width={36} height={36} loading="lazy" />}
        <h3 className="entry-title display">{title}</h3>
      </div>
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
