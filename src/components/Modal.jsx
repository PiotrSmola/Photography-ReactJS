import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ setModalOpen }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      setSubmitMessage('Please fill in all required fields.');
    } else {
      setSubmitMessage('Your message was sent successfully');
      setTimeout(() => {
        setModalOpen(false);
      }, 4000);
    }
  };

  return (
    <div className="modal__bgc">
      <div className="modal">
        <form onSubmit={handleSubmit}>
          <FontAwesomeIcon 
            icon={faXmark} 
            className="modal__icon" 
            onClick={() => setModalOpen(false)} 
          />
          <div className="modal__body">
            <h2 className="modal__title">Leave us your number, We will call You</h2>
            <div className="modal__inputs">
              <div className="modal__input">
                <input
                  type="text"
                  placeholder="Name*"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="modal__input">
                <input
                  type="number"
                  placeholder="Phone*"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <button type="submit" className="modal__btn">
              REQUEST
            </button>
            {submitMessage && <p className="modal__submit-message">{submitMessage}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
