import React from "react";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact__container container">
        <ul className="contact__information">
          <li>
            <i className="contact__icon fa-solid fa-house"></i>
            <a
              href="https://goo.gl/maps/example"
              target="_blank"
              rel="noopener noreferrer"
            >
              123 Photo St, New York
            </a>
          </li>
          <li>
            <i className="contact__icon fa-solid fa-phone"></i>
            <a href="tel:1234567890">(+00) 123-456-7890</a>
          </li>
          <li>
            <i className="contact__icon fa-regular fa-envelope"></i>
            <a href="mailto:info@photoservices.com">info@photoservices.com</a>
          </li>
          <li>
            <span className="contact__message">Email has been copied</span>
          </li>
        </ul>
        <div className="contact__media">
          <a href="#home" className="contact__logo">
            PhotoServices
          </a>
          <p className="contact__text">
            Stay connected on social media for creative inspiration,
            behind-the-scenes content, and the latest updates on our photography
            projects. Join our community and be part of the visual storytelling
            journey!
          </p>
          <div className="contact__social">
            <i className="contact__social--icon fa-brands fa-facebook-f"></i>
            <i className="contact__social--icon fa-brands fa-instagram"></i>
            <i className="contact__social--icon fa-brands fa-twitter"></i>
          </div>
        </div>
        <div className="contact__links">
          <a className="contact__link" href="#home">
            home
          </a>
          <a className="contact__link" href="#about">
            about
          </a>
          <a className="contact__link" href="#services">
            services
          </a>
          <a className="contact__link" href="#team">
            team
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
