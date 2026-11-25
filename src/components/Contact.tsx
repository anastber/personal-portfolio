import React from 'react';
import { links } from '../data/content';

const Contact: React.FC = () => (
  <section id="contact" className="section contact">
    <h2 className="section-label">Contact</h2>
    <p className="contact-text display reveal">
      You can reach me by email at{' '}
      <a href={`mailto:${links.email}`}>{links.email}</a> or on{' '}
      <a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>.
    </p>
  </section>
);

export default Contact;
