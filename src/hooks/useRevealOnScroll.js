import { useEffect } from 'react';

const useRevealOnScroll = () => {
  useEffect(() => {
    const reveal = () => {
      const elements = document.querySelectorAll('.reveal, .move, .moves');
      const windowHeight = window.innerHeight;
      const revealPoint = 150;
      const revealPointSmall = 20;

      elements.forEach((element) => {
        const revealTop = element.getBoundingClientRect().top;
        if (revealTop < windowHeight - revealPoint) {
          element.classList.add('active');
        }
        if (
          (element.classList.contains('move') && revealTop < windowHeight - revealPointSmall) ||
          (element.classList.contains('moves') && revealTop < windowHeight - revealPoint)
        ) {
          element.style.opacity = '1';
          element.style.transform = 'translateX(0)';
        }
      });
    };

    window.addEventListener('scroll', reveal);
    reveal();
    return () => window.removeEventListener('scroll', reveal);
  }, []);
};

export default useRevealOnScroll;
