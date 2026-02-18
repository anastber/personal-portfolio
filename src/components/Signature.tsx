import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Signature.scss';

const Signature: React.FC = () => {
  const [key, setKey] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Auto-trigger animation after a short delay
          setTimeout(() => setKey(k => k + 1), 500);
        }
      },
      { threshold: 0.5 }
    );

    const signatureElement = document.querySelector('.signature-wrapper');
    if (signatureElement) {
      observer.observe(signatureElement);
    }

    return () => observer.disconnect();
  }, []);

  const name = "Anas Tber";
  const letters = name.split('');

  return (
    <div className="signature-wrapper">
      
      <div className="signature-container" key={key}>
        <div className="signature-name">
          {letters.map((letter, index) => (
            <motion.span
              key={`${key}-${index}`}
              className={`signature-letter ${letter === ' ' ? 'signature-space' : ''}`}
              initial={{ 
                opacity: 0, 
                y: 20,
                scale: 0.8,
                filter: "blur(4px)"
              }}
              animate={{ 
                opacity: 1, 
                y: 0,
                scale: 1,
                filter: "blur(0px)"
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15 + 0.5,
                ease: [0.25, 0.4, 0.25, 1]
              }}
              whileHover={{
                y: -2,
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </div>
        
      </div>
      
      {/* Replay button */}
      <motion.button
        onClick={() => setKey(k => k + 1)}
        className="signature-replay"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.6, delay: letters.length * 0.15 + 0.5 }}
        title="Replay signature animation"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
          <path d="M21 3v5h-5"/>
          <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
          <path d="M3 21v-5h5"/>
        </svg>
      </motion.button>
    </div>
  );
};

export default Signature;