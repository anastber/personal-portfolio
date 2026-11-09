import React from 'react';

const words = (text: string, offset: number) =>
  text.split(' ').map((word, i) => (
    <React.Fragment key={offset + i}>
      <span className="word" style={{ '--i': offset + i } as React.CSSProperties}>{word}</span>{' '}
    </React.Fragment>
  ));

const LEAD = 'I build the software around machine learning, and I like staying close to the models themselves,';
const HIGHLIGHT = 'from the first experiment to production.';

const About: React.FC = () => {
  const leadCount = LEAD.split(' ').length;
  return (
    <section id="about" className="section">
      <h2 className="section-label">About</h2>
      <p className="lead display">
        {words(LEAD, 0)}
        <mark>{words(HIGHLIGHT, leadCount)}</mark>
      </p>
      <p className="reveal">
        I'm a final-year engineering student at <strong>Centrale Lyon</strong>. At <strong>BNP Paribas CIB</strong> I
        owned a regulator-approved anti-money-laundering platform end to end: I designed the detection approach, from
        graph features to an Isolation Forest with SHAP explanations, and built the pipeline over 40M+ transactions and
        the LLM features investigators use every day.
      </p>
      <div className="education reveal">
        <b className="display">École Centrale de Lyon</b>
        <span className="entry-when">Engineering degree · 2023 – 2027</span>
      </div>
    </section>
  );
};

export default About;
