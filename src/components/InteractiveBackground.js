// components/InteractiveBackground.js
import React, { useEffect, useRef } from 'react';
import styles from '../styles/InteractiveBackground.module.css';

const InteractiveBackground = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      if (circleRef.current) {
        circleRef.current.style.left = `${clientX}px`;
        circleRef.current.style.top = `${clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div className={styles.circle} ref={circleRef}></div>;
};

export default InteractiveBackground;
