import React from 'react';
import Entry from './Entry';
import { experiences } from '../data/content';

const Experience: React.FC = () => (
  <section id="experience" className="section">
    <h2 className="section-label">Experience</h2>
    <div className="entries">
      {experiences.map((exp) => (
        <Entry
          key={exp.company}
          when={exp.period}
          logo={exp.logo}
          title={
            <>
              {exp.title} <span className="entry-company">· {exp.company}</span>
            </>
          }
          description={exp.description}
          stack={exp.stack}
        />
      ))}
    </div>
  </section>
);

export default Experience;
