import React from 'react';
import Entry from './Entry';
import { projects } from '../data/content';

const Projects: React.FC = () => (
  <section id="projects" className="section">
    <h2 className="section-label">Selected projects</h2>
    <div className="entries">
      {projects.map((project) => (
        <Entry
          key={project.title}
          when={project.year}
          title={
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              {project.title} <span className="entry-arrow" aria-hidden="true">↗</span>
            </a>
          }
          description={project.description}
          demo={project.demo}
          ongoing={project.ongoing}
          stack={project.stack}
        />
      ))}
    </div>
  </section>
);

export default Projects;
