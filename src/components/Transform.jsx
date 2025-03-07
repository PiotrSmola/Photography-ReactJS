import React from 'react';

const Transform = ({ setModalOpen }) => {
  return (
    <section className="transform">
      <div className="transform__body">
        <h3 className="transform__title">Ready to Capture Your Moments?</h3>
        <p className="transform__text">
          Transform your memories into stunning images with our expert photography services.
        </p>
        <button className="transform__btn" onClick={() => setModalOpen(true)}>
          hire us now
        </button>
      </div>
    </section>
  );
};

export default Transform;
