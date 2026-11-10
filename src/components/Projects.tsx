import React from 'react';
import Entry from './Entry';
import { ArrowUpRight } from './Icons';
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
              {project.title} <ArrowUpRight className="entry-arrow" />
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
