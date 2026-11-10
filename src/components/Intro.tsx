import React from 'react';
import RotatingWords from './RotatingWords';
import { links, rotatingWords } from '../data/content';
import './Intro.scss';

const Intro: React.FC = () => (
  <section className="intro" id="top">
    <h1 className="intro-role display">
      I build <RotatingWords words={rotatingWords} />,
      <br />
      from the model to production.
    </h1>

    <p className="intro-status">
      Final-year engineering student at Centrale Lyon, focused on software and AI engineering
    </p>

    <div className="intro-links">
      <a href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href={links.resume} target="_blank" rel="noopener noreferrer">Résumé</a>
    </div>
  </section>
);

export default Intro;
