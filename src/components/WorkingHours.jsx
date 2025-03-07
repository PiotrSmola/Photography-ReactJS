import React from 'react';

const WorkingHours = () => {
  return (
    <section className="open">
      <h2 className="open__title">Working Hours</h2>
      <hr className="open__title--line" />
      <div className="open__body reveal container">
        <p className="open__text">We are available to capture your moments at any time</p>
        <div className="open__hours">
          <p className="open__hours--day">Weekdays</p>
          <p className="open__hours--hour">9:00 &mdash; 19:00</p>
        </div>
        <div className="open__hours">
          <p className="open__hours--day">Saturday</p>
          <p className="open__hours--hour">9:00 &mdash; 17:00</p>
        </div>
        <div className="open__hours">
          <p className="open__hours--day">Sunday</p>
          <p className="open__hours--hour">Closed</p>
        </div>
      </div>
    </section>
  );
};

export default WorkingHours;
