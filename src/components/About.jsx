import React from "react";

const About = () => {
  return (
    <section className="about container" id="about">
      <h2 className="about__heading">About Us</h2>
      <hr className="about__heading--line" />
      <div className="about__bgc container">
        <img
          className="about__img move"
          src="/img/aboutUs.jpg"
          alt="Photography session"
        />
        <div className="about__text move">
          <h3 className="about__title">Creative & Professional Photography</h3>
          <p className="about__paragraph">
            Step into our studio for a photography experience that seamlessly
            blends timeless elegance with modern techniques. Whether it's a
            wedding, a family portrait, or a corporate event, we ensure that
            every shot tells a story. Our expert photographers are passionate
            about capturing genuine emotions and intricate details, transforming
            fleeting moments into lifelong memories. With state-of-the-art
            equipment and an artistic approach, we guarantee high-quality images
            that reflect your unique personality and vision.
          </p>
          <ul className="about__list">
            <li className="about__item">
              <i className="fa-solid fa-camera-retro"></i>
              <span>High Quality Images</span>
            </li>
            <li className="about__item">
              <i className="fa-solid fa-palette"></i>
              <span>Creative Concepts</span>
            </li>
            <li className="about__item">
              <i className="fa-solid fa-user"></i>
              <span>Personalized Service</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
