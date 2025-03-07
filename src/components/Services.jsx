import React from 'react';

const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="services__title">Our Services</h2>
      <hr className="services__title--line" />
      <div className="services__container">
        <div className="services__content">
          <div className="services__icons services__icons--left move">
            <img
              className="services__icon"
              src="/icons/wedding.svg"
              alt="wedding icon"
            />
            <span className="services__text">Wedding Photography</span>
          </div>
          <div className="services__icons services__icons--left move">
            <img
              className="services__icon edit_icon"
              src="/icons/edit.svg"
              alt="edit icon"
            />
            <span className="services__text">Event Coverage</span>
          </div>
          <div className="services__icons services__icons--left move">
            <img
              className="services__icon"
              src="/icons/portrait.svg"
              alt="portrait icon"
            />
            <span className="services__text">Portrait Sessions</span>
          </div>
        </div>
        <img
          src="/img/services.jpg"
          alt="Photography session"
          className="services__img services_main_img"
        />
        <div className="services__content">
          <div className="services__icons services__icons--right move">
            <img
              className="services__icon"
              src="/icons/landscape.svg"
              alt="landscape icon"
            />
            <span className="services__text">Landscape Photography</span>
          </div>
          <div className="services__icons services__icons--right move">
            <img
              className="services__icon"
              src="/icons/product.svg"
              alt="product icon"
            />
            <span className="services__text">Product Shoots</span>
          </div>
          <div className="services__icons services__icons--right move">
            <img
              className="services__icon"
              src="/icons/drone.svg"
              alt="drone icon"
            />
            <span className="services__text">Aerial Photography</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
