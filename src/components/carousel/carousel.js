import React, { useState, useEffect } from 'react';
import run from './run.jpg';
import code from './code.jpg';
import swim from './swim.jpg';
import warner from './logo.jpg';
import './carousel.css'

const imgs = [run, code, swim];

export default function Images() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((currentIndex + 1) % imgs.length);
        setIsTransitioning(false);
      }, 500); // Transition duration
    }, 8000); // Automatic animation interval

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  function handleclickRight() {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % imgs.length);
      setIsTransitioning(false);
    }, 50); // Transition duration
  }

  function handleclickLeft() {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((currentIndex - 1 + imgs.length) % imgs.length);
      setIsTransitioning(false);
    }, 50); // Transition duration
  }

  return (
    <div className='carousel-bar'>
      <button onClick={handleclickLeft} className="left-button">&#x21e4;</button>
      <img
        src={imgs[currentIndex]}
        alt='img'
        className={`images ${isTransitioning ? 'transitioning' : ''}`}
      />
      <button onClick={handleclickRight} className="right-button">&#x21e5;</button>
    </div>
  );
}
