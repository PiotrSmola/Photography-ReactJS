import React from 'react';

const Team = () => {
  const photographers = [
    { name: 'Alexander Novak', img: '/img/team1.jpg', alt: 'Photographer Alexander Novak' },
    { name: 'Kwame Okafor', img: '/img/team2.jpg', alt: 'Editor Kwame Okafor' },
    { name: 'Hiroshi Takeda', img: '/img/team3.jpg', alt: 'Photographer Hiroshi Takeda' },
  ];

  return (
    <section className="team" id="team">
      <h2 className="team__title">Our Team</h2>
      <hr className="team__title--line" />
      <div className="team__body container">
        {photographers.map((person, index) => (
          <div
            key={index}
            className={`team__card ${index === 0 ? 'team__card--first moves' : index === 1 ? 'reveal' : 'team__card--third moves'}`}
          >
            <img className="team__img" src={person.img} alt={person.alt} />
            <div className="team__text">
              <h3 className="team__name">{person.name}</h3>
              <div className="team__icons">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-twitter"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
