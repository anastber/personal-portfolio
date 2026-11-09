import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

interface RotatingWordsProps {
  words: string[];
  interval?: number;
}

const RotatingWords: React.FC<RotatingWordsProps> = ({ words, interval = 2400 }) => {
  const [index, setIndex] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);
  const [width, setWidth] = useState<number>();
  const refs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => {
      setIndex((i) => {
        setPrevious(i);
        return (i + 1) % words.length;
      });
    }, interval);
    return () => window.clearInterval(timer);
  }, [words.length, interval]);

  useLayoutEffect(() => {
    const measure = () => setWidth(refs.current[index]?.scrollWidth);
    measure();
    document.fonts?.ready.then(measure);
  }, [index]);

  return (
    <span className="rotating-words" style={{ width }} aria-live="polite">
      {words.map((word, i) => (
        <span
          key={word}
          ref={(el) => {
            refs.current[i] = el;
          }}
          className={i === index ? 'is-active' : i === previous ? 'is-leaving' : undefined}
          aria-hidden={i !== index}
        >
          {word}
        </span>
      ))}
    </span>
  );
};

export default RotatingWords;
