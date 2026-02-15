import React from 'react';
import './Experience.scss';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Data Scientist Intern',
      company: 'BNP Paribas CIB',
      period: 'Present - July 2026',
      location: 'Paris, France',
      description: '',
      technologies: ['Python', 'Machine Learning', 'Graph Theory', 'Data Analysis', 'NumPy', 'Pandas', 'PyViz'],
      current: true
    },
    {
      title: 'Tech and Operations Intern',
      company: 'Gentle Mates',
      period: '2025',
      location: 'France',
      description: 'Designed and enhanced innovative internal Tech Tools leveraging web and mobile technologies, computer vision, and AI to optimize internal processes.',
      technologies: ['React Native', 'Computer Vision', 'Python', 'AI/ML', 'Web Development'],
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
          <span className="code-text">experience = df.sort_values('</span>
          <span className="gradient-text">date</span>
          <span className="code-text">', ascending=False)</span>
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