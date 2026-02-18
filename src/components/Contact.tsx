import React from 'react';
import Signature from './Signature';
import './Contact.scss';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      value: 'anas.tber@etu.ec-lyon.fr',
      link: 'mailto:anas.tber@etu.ec-lyon.fr',
    },
    {
      icon: 'fab fa-linkedin-in',
      label: 'LinkedIn',
      value: 'Anas Tber',
      link: 'https://www.linkedin.com/in/anas-tber-99b994222/',
    },
    {
      icon: 'fab fa-github',
      label: 'GitHub',
      value: '@anastber',
      link: 'https://github.com/anastber',
    },
    {
      icon: 'fas fa-map-marker-alt',
      label: 'Location',
      value: 'Paris, France',
      link: null,
    },
  ];

  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <h2 className="section-title">
          <span className="code-text">await </span>
          <span className="gradient-text">connect</span>
          <span className="code-text">('anas.tber@etu.ec-lyon.fr')</span>
        </h2>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect!</h3>
            <div className="contact-grid">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">
                    <i className={item.icon}></i>
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">{item.label}</span>
                    {item.link ? (
                      <a
                        href={item.link}
                        target={item.link.startsWith('mailto:') ? '_self' : '_blank'}
                        rel={item.link.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                        className="contact-value"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact-value">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-cta">
            <div className="cta-card">
              <h4>Ready to collaborate?</h4>
              <p>
                Whether you have a project in mind, want to discuss opportunities,
                or just want to say hello, I'd love to hear from you.
              </p>
              <div className="cta-actions">
                <a
                  href="mailto:anas.tber@etu.ec-lyon.fr"
                  className="btn btn-primary"
                >
                  <i className="fas fa-paper-plane"></i>
                  Send Message
                </a>
                <a
                  href="assets/documents/CV_English_T_version.pdf"
                  download
                  className="btn btn-secondary"
                >
                  <i className="fas fa-download"></i>
                  Download Resume
                </a>
              </div>
              
              <Signature />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;