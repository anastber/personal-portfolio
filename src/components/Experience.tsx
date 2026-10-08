import React from 'react';
import './Experience.scss';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Data Scientist Intern',
      company: 'BNP Paribas CIB — Compliance, Anti-Money Laundering (AML)',
      period: 'January 2026 - July 2026',
      location: 'Paris, France',
      description: 'Delivered a regulator-approved, network-based AML detection and investigation platform on a 10M+ entity / 40M+ transaction dataset, with a Polars/PyArrow lazy pipeline. Cycle detection (SCC + DFS) surfaces money-mule rings, and an Isolation Forest with SHAP ranks suspicious communities with regulator-facing justifications. Shipped LLM-powered AI risk summaries and a multi-turn investigation chatbot into the Streamlit app. Sole owner of the repository: led the refactor and wrote the full technical documentation for handover to the IT team.',
      technologies: ['Python', 'Polars', 'PyArrow', 'NetworkX', 'Graph Theory', 'Isolation Forest', 'SHAP', 'LLM / Prompt Engineering', 'Streamlit'],
      current: false
    },
    {
      title: 'Tech and Operations Intern',
      company: 'Gentle Mates',
      period: 'April 2025 - November 2025',
      location: 'Paris, France',
      description: 'Built an automated social media analytics dashboard (Streamlit/Python) combining computer vision (YOLO) for sponsor logo detection and NLP/Regex for brand mention tracking, improving partnership ROI visibility. Trained a YOLO model on a custom-built dataset of sponsor logos, and contributed to internal software and AI tools for analytics, monitoring and operations.',
      technologies: ['Python', 'YOLO', 'Computer Vision', 'NLP', 'Regex', 'Streamlit'],
      current: false
    },
    {
      title: 'Founding Team Member & Software Engineer',
      company: 'FreyIA (Early-Stage Startup)',
      period: '2023 - 2025',
      location: 'Lyon, France',
      description: 'Co-initiated AI-powered smart waste-sorting solution from academic project to award-winning startup. Developed full-stack web platform with PostgreSQL database and implemented RESTful APIs with WebSockets for IoT integration.',
      technologies: ['Full-Stack Development', 'PostgreSQL', 'RESTful APIs', 'WebSockets', 'IoT', 'AI/ML'],
      current: false
    }
  ];

  return (
    <section id="experience" className="experience-section section">
      <div className="container">
        <h2 className="section-title">
          <span className="gradient-text">Experience</span>
        </h2>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className={`experience-item ${exp.current ? 'current' : ''}`}>
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
                {index < experiences.length - 1 && <div className="timeline-line"></div>}
              </div>

              <div className="experience-card">
                <div className="experience-header">
                  <div className="experience-info">
                    <h3 className="experience-title">{exp.title}</h3>
                    <div className="experience-company">
                      <span>{exp.company}</span>
                      {exp.current && <span className="current-badge">Current</span>}
                    </div>
                    <div className="experience-meta">
                      <span className="period">
                        <i className="fas fa-calendar-alt"></i>
                        {exp.period}
                      </span>
                      <span className="location">
                        <i className="fas fa-map-marker-alt"></i>
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="experience-description">{exp.description}</p>

                <div className="experience-technologies">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;