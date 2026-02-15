
import React, { useState } from 'react';
import './Projects.scss';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: 'internship' | 'personal' | 'academic';
  githubUrl?: string;
  liveUrl?: string;
  downloadUrl?: string;
  images?: string[];
  icon?: string;
}

const Projects: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string, images: string[], currentIndex: number} | null>(null);
  
  const openImageModal = (imageSrc: string, projectTitle: string, allImages: string[], imageIndex: number = 0) => {
    setSelectedImage({
      src: imageSrc,
      alt: projectTitle,
      images: allImages,
      currentIndex: imageIndex
    });
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    const newIndex = direction === 'next' 
      ? (selectedImage.currentIndex + 1) % selectedImage.images.length
      : (selectedImage.currentIndex - 1 + selectedImage.images.length) % selectedImage.images.length;
    
    setSelectedImage({
      ...selectedImage,
      src: selectedImage.images[newIndex],
      currentIndex: newIndex
    });
  };

  const projects: Project[] = [
    // Internship Projects
    {
      title: 'Social Media Analytics Dashboard',
      description: 'Developed an automated social media analytics dashboard using Streamlit and Python, implementing computer vision (YOLO) and Regex to detect sponsor mentions and improve partnership ROI tracking.',
      technologies: ['Python', 'Streamlit', 'YOLO', 'Computer Vision', 'Regex', 'Data Analytics'],
      category: 'internship',
      images: ['assets/images/RS1.png', 'assets/images/RS2.png', 'assets/images/RS3.png']
    },
    {
      title: 'Esports Analytics Mobile App',
      description: 'Built a cross-platform mobile app in React Native integrating Valorant Data for real-time player analytics, enabling data-driven coaching decisions.',
      technologies: ['React Native', 'API', 'Data Visualization', 'Mobile Development'],
      category: 'internship',
      images: ['assets/images/Valo1.jpeg', 'assets/images/Valo2.jpeg', 'assets/images/Valo3.jpeg', 'assets/images/Valo4.jpeg']
    },
    {
      title: 'Jersey Flocking Tool',
      description: 'Developed a web application for customizing M8 esports jerseys by adding player names and numbers to PDF templates. Features real-time preview, individual/bulk processing via CSV upload, Google Drive integration, and high-resolution export capabilities.',
      technologies: ['Web Development', 'PDF Processing', 'Google Drive API', 'CSV Processing'],
      category: 'internship',
      images: ['assets/images/jersey.png']
    },
    // Academic & Personal Projects
    {
      title: 'Transformer Architectures & NLP',
      description: 'Researched transformer architectures and attention mechanisms. Built sentiment analysis model using CamemBERT achieving 95.91% accuracy on French movie reviews.',
      technologies: ['Python', 'Transformers', 'CamemBERT', 'NLP', 'BERT'],
      category: 'academic',
      downloadUrl: 'assets/documents/Rapport___Transformers (2).pdf',
      images: ['assets/images/transformers.png']
    },
    {
      title: 'YouTube Sentiment Analyzer',
      description: 'YouTube Sentiment Analysis web app built with Streamlit, Hugging Face Transformers (RoBERTa & BERT), YouTube Data API v3, and Plotly visualizations.',
      technologies: ['Python', 'Streamlit', 'Hugging Face', 'RoBERTa', 'BERT', 'YouTube API', 'Plotly'],
      category: 'personal',
      githubUrl: 'https://github.com/anastber/youtube-sentiment-analysis',
      images: ['assets/images/Demo1.png', 'assets/images/Demo2.png', 'assets/images/Demo3.png']
    },
    {
      title: 'Ant Colony Optimization',
      description: 'Implemented ant colony optimization algorithm for shortest path problem. Developed interactive visualization with Tkinter displaying real-time pathfinding.',
      technologies: ['Python', 'Algorithm Design', 'Tkinter', 'Optimization', 'Data Structures'],
      category: 'academic',
      githubUrl: 'https://github.com/anastber/ant-colony-optimization',
      images: ['assets/images/ant-colony.png']
    },
    {
      title: 'House Price Prediction',
      description: 'Applied feature engineering to create composite features. Tested Linear Regression, Ridge, Lasso, and Random Forest models on the Ames Housing dataset.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Machine Learning', 'Feature Engineering'],
      category: 'academic',
      githubUrl: 'https://github.com/anastber/House-Prices-',
      icon: '🏘️'
    },
    {
      title: '2048 Game',
      description: 'This project is a C++ 2048 clone built with Qt and QML. It faithfully reproduces the original gameplay without ads and adds extra features for a better user experience.',
      technologies: ['C++', 'Qt', 'QML', 'Game Development', 'UI/UX'],
      category: 'personal',
      githubUrl: 'https://github.com/anastber/2048-game',
      images: ['assets/images/2048.png', 'assets/images/2048_1.png']
    }
  ];

  const groupedProjects = {
    internship: projects.filter(p => p.category === 'internship'),
    academic: projects.filter(p => p.category === 'academic'),
    personal: projects.filter(p => p.category === 'personal')
  };

  const renderProject = (project: Project, index: number) => (
    <div key={index} className="project-card fade-in-up">
      <div className="project-image">
        {project.images && project.images.length > 0 ? (
          <div 
            className="project-gallery clickable" 
            onClick={() => openImageModal(project.images![0], project.title, project.images!, 0)}
          >
            <img
              src={project.images[0]}
              alt={project.title}
              loading="lazy"
            />
            {project.images.length > 1 && (
              <div className="image-count">
                <i className="fas fa-images"></i>
                {project.images.length}
              </div>
            )}
            <div className="image-overlay">
              <i className="fas fa-expand-alt"></i>
            </div>
          </div>
        ) : project.icon ? (
          <div className="project-icon">{project.icon}</div>
        ) : (
          <div className="project-placeholder">
            <i className="fas fa-code"></i>
          </div>
        )}
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-technologies">
          {project.technologies.map((tech, techIndex) => (
            <span key={techIndex} className="tech-tag">{tech}</span>
          ))}
        </div>

        <div className="project-actions">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <i className="fab fa-github"></i>
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <i className="fas fa-external-link-alt"></i>
              Live Demo
            </a>
          )}
          {project.downloadUrl && (
            <a
              href={project.downloadUrl}
              download
              className="btn btn-secondary"
            >
              <i className="fas fa-download"></i>
              Download
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="projects-section section">
      <div className="container">
        <h2 className="section-title">
          <span className="code-text">const projects = [</span>
          <span className="gradient-text">myWork</span>
          <span className="code-text">]</span>
        </h2>

        {/* Internship Projects */}
        <div className="projects-category">
          <h3 className="category-title">
            <i className="fas fa-briefcase"></i>
            Internship Projects
          </h3>
          <div className="projects-grid">
            {groupedProjects.internship.map(renderProject)}
          </div>
        </div>

        {/* Academic & Personal Projects */}
        <div className="projects-category">
          <h3 className="category-title">
            <i className="fas fa-graduation-cap"></i>
            Academic & Personal Projects
          </h3>
          <div className="projects-grid">
            {[...groupedProjects.academic, ...groupedProjects.personal].map(renderProject)}
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="image-modal" onClick={closeImageModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeImageModal}>
                <i className="fas fa-times"></i>
              </button>
              
              <div className="modal-image-container">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt}
                  className="modal-image"
                />
                
                {selectedImage.images.length > 1 && (
                  <>
                    <button 
                      className="modal-nav modal-prev" 
                      onClick={() => navigateImage('prev')}
                    >
                      <i className="fas fa-chevron-left"></i>
                    </button>
                    <button 
                      className="modal-nav modal-next" 
                      onClick={() => navigateImage('next')}
                    >
                      <i className="fas fa-chevron-right"></i>
                    </button>
                  </>
                )}
              </div>
              
              <div className="modal-info">
                <h3>{selectedImage.alt}</h3>
                {selectedImage.images.length > 1 && (
                  <div className="modal-counter">
                    {selectedImage.currentIndex + 1} / {selectedImage.images.length}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;