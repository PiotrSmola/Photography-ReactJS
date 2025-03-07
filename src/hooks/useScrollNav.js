import { useState, useEffect } from 'react';

const useScrollNav = (threshold = 40) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavBg(window.scrollY > threshold);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return navBg;
};

export default useScrollNav;
