
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
    {
      title: 'AirKeys — Camera-Based Gesture Instrument',
      description: 'Camera-based gesture instrument: a self-trained neural network (scikit-learn) classifies hand poses alongside MediaPipe\'s pretrained hand-tracking, with live gesture personalization via k-nearest-neighbors, turning gestures into music entirely client-side in the browser.',
      technologies: ['Python', 'scikit-learn', 'TypeScript', 'Next.js', 'MediaPipe', 'Machine Learning', 'Tone.js'],
      category: 'personal',
      githubUrl: 'https://github.com/anastber/air-keys',
      liveUrl: 'https://air-keys-delta.vercel.app/',
      icon: '🎹'
    },
    {
      title: 'Transformer Architectures & NLP',
      description: 'Studied attention mechanisms, Word2Vec/GloVe/BERT embeddings, and Transformer vs. Mamba (SSM) complexity trade-offs.',
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
      title: 'House Price Prediction',
      description: 'Applied feature engineering to create composite features. Tested Linear Regression, Ridge, Lasso, and Random Forest models on the Ames Housing dataset.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Machine Learning', 'Feature Engineering'],
      category: 'personal',
      githubUrl: 'https://github.com/anastber/House-Prices-',
      icon: '🏘️'
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
      title: '2048 Game',
      description: 'This project is a C++ 2048 clone built with Qt and QML. It faithfully reproduces the original gameplay without ads and adds extra features for a better user experience.',
      technologies: ['C++', 'Qt', 'QML', 'Game Development', 'UI/UX'],
      category: 'academic',
      githubUrl: 'https://github.com/anastber/2048-game',
      images: ['assets/images/2048.png', 'assets/images/2048_1.png']
    }
  ];


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
        <div className="project-header">
          <h3 className="project-title">{project.title}</h3>
          <span className={`project-category-tag ${project.category}`}>
            {project.category === 'internship' ? 'Internship' : 
             project.category === 'academic' ? 'Academic' : 'Personal'}
          </span>
        </div>
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
          <span className="gradient-text">My Projects</span>
        </h2>

        <div className="projects-grid">
          {projects.map(renderProject)}
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