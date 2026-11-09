import React from 'react';

interface EntryProps {
  when: string;
  title: React.ReactNode;
  description: string;
  ongoing?: string;
  stack: string[];
}

const Entry: React.FC<EntryProps> = ({ when, title, description, ongoing, stack }) => (
  <article className="entry reveal">
    <div className="entry-when">{when}</div>
    <div>
      <h3 className="entry-title display">{title}</h3>
      <p className="entry-text">{description}</p>
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
