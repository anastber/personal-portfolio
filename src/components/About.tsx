import React from 'react';
import './About.scss';

const About: React.FC = () => {
  const skills = {
    languages: ['Python', 'TypeScript', 'JavaScript', 'SQL',],
    tools: ['Git', 'Docker', 'PostgreSQL', 'MongoDB', 'Google Cloud'],
    aiml: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'OpenCV']
  };

  return (
    <section id="about" className="about-section section">
      <div className="container">
        <h2 className="section-title">
          <span className="code-text">def </span>
          <span className="gradient-text">about_me</span>
          <span className="code-text">():</span>
        </h2>

        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <p>
                I'm a passionate engineering student at <strong>Centrale Lyon</strong>, currently
                working as a <strong>Data Scientist intern at BNP Paribas CIB</strong> until July 2026.
                My journey in technology spans across AI, machine learning, and full-stack development.
              </p>

              <p>
                With hands-on experience from my internships at <strong>Gentle Mates</strong> and <strong>BNP Paribas CIB</strong>, I've developed a strong foundation
                in both theoretical knowledge and practical application of cutting-edge technologies.
              </p>

              <p>
                I thrive on solving complex problems through innovative solutions, and creating
                AI-powered systems that make a real-world impact.
              </p>
            </div>

            <div className="education">
              <h3>
                <i className="fas fa-graduation-cap"></i>
                Education
              </h3>
              <div className="education-item">
                <h4>Engineering Degree</h4>
                <p>École Centrale de Lyon • 2022 - 2027</p>
                <span className="status">Currently on gap year for internship</span>
              </div>
            </div>
          </div>

          <div className="skills-section">
            <h3>
              <i className="fas fa-code"></i>
              Technical Skills
            </h3>

            <div className="skills-grid">
              <div className="skill-category">
                <h4>Languages</h4>
                <div className="skill-tags">
                  {skills.languages.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h4>Tools & Technologies</h4>
                <div className="skill-tags">
                  {skills.tools.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h4>AI & Machine Learning</h4>
                <div className="skill-tags">
                  {skills.aiml.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-footer">
          <span className="code-text">    """Data Scientist & AI Engineer"""</span>
        </div>
      </div>
    </section>
  );
};

export default About;