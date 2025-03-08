import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const slides = [
    { img: '/img/testimonials1.jpg', name: 'Anna Lee', text: 'Amazing photography that captures the essence of our day.' },
    { img: '/img/testimonials2.jpg', name: 'Mark Wilson', text: 'Professional and creative – highly recommended!' },
    { img: '/img/testimonials3.jpg', name: 'Emily Davis', text: 'Every shot tells a story. Exceptional service.' },
    { img: '/img/testimonials4.jpg', name: 'Samuel Green', text: 'A wonderful experience from start to finish.' },
    { img: '/img/testimonials5.jpg', name: 'Alex Brown', text: 'Transformed our moments into everlasting memories.' },
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);
  
  return (
    <section className="testimonials">
      <h2 className="testimonials__title">Testimonials</h2>
      <hr className="testimonials__title--line" />
      <div className="testimonials__body">
        <div 
          className="testimonials__slider" 
          style={{ transform: `translateX(-${(currentIndex+1) * 700}px)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="testimonials__slide">
              <img src={slide.img} alt={slide.name} className="testimonials__img" />
              <h3 className="testimonials__name">{slide.name}</h3>
              <p className="testimonials__text">{slide.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
