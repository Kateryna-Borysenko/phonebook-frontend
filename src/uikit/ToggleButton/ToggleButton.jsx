import React, { useState } from 'react';
import s from './ToggleButton.module.css';

const ToggleButton = ({ children, titleToOpen, titleToClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div className={s.container}>
      <button className={s.button} onClick={handleToggle}>
        {isOpen ? titleToClose || 'Close' : titleToOpen || 'Open'}
        {isOpen ? (
          <svg
            className={s.icon}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        ) : (
          <svg
            className={s.icon}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M7.41 7.41L12 12l4.59-4.59L18 9l-6 6-6-6z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        )}
      </button>
      {isOpen && <div>{children}</div>}
    </div>
  );
};
export default ToggleButton;
