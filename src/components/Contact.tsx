import React from 'react';
import { links } from '../data/content';

const Contact: React.FC = () => (
  <section id="contact" className="section contact">
    <h2 className="section-label">Contact</h2>
    <p className="contact-title display reveal">Let's build something together.</p>
    <p className="reveal">Always happy to talk about software, machine learning and AI engineering.</p>
    <a className="contact-mail" href={`mailto:${links.email}`}>{links.email}</a>
  </section>
);

export default Contact;
