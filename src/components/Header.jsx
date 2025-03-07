import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Header = ({ setModalOpen }) => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavBg(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleBurger = () => setBurgerOpen(prev => !prev);

  return (
    <header className="header" id="home">
      <nav className={`nav container ${navBg ? 'nav--bgc' : ''}`}>
        <a href="#home" className="nav__logo">PhotoServices</a>
        <div className={`nav__links ${burgerOpen ? 'burger--open' : ''}`}>
          {['home', 'about', 'services', 'our photographers', 'contact'].map((link) => (
            <a
              key={link}
              className="nav__link"
              href={`#${link}`}
              onClick={() => setBurgerOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
        <div className="burger" onClick={toggleBurger}>
          {burgerOpen ? (
            <FontAwesomeIcon icon={faXmark} className="burger--hide" />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
      </nav>
      <div className="header__text container">
        <h1 className="header__title">Capture Your Best Moments</h1>
        <button className="header__btn" onClick={() => setModalOpen(true)}>
          Hire us now
        </button>
      </div>
    </header>
  );
};

export default Header;
