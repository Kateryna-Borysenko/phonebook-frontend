import React, { useState, useEffect, useRef } from 'react';
import s from './DropdownBtn.module.css';

const DropdownBtn = ({ items = [], dropdownTitle }) => {
  const activatorRef = useRef(null);
  const dropdownListRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const keyHandler = event => {
    console.log(event);
    if (event.key === 'Escape' && isOpen) {
      setIsOpen(false);
    }
  };

  const handleOutsideClick = event => {
    if (dropdownListRef.current) {
      if (
        dropdownListRef.current.contains(event.target) ||
        activatorRef.current.contains(event.target)
      ) {
        return;
      }

      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      dropdownListRef.current.querySelector('a').focus();
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.addEventListener('mousedown', handleOutsideClick);
    }
  }, [isOpen]);

  return (
    <div className={s.dropdown_wrapper} onKeyUp={keyHandler}>
      <button
        className={s.dropdown_activator}
        aria-haspopup="true"
        aria-controls={dropdownTitle}
        onClick={handleClick}
        ref={activatorRef}
      >
        {dropdownTitle}
        {isOpen ? (
          <svg
            height="24"
            fill="rgb(70,70,70)"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m0 0h24v24h-24z" fill="none" />
            <path d="m7.41 15.41 4.59-4.58 4.59 4.58 1.41-1.41-6-6-6 6z" />
          </svg>
        ) : (
          <svg
            height="24"
            fill="rgb(70,70,70)"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m0 0h24v24h-24z" fill="none" />
            <path d="m7.41 8.59 4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z" />
          </svg>
        )}
      </button>
      <ul
        ref={dropdownListRef}
        className={`${s.dropdown_item_list} ${isOpen ? s.active : ''} `}
      >
        {items.map((item, index) => {
          return (
            <li className={s.item_list} key={index}>
              <a href={item.slug}>{item.anchor}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DropdownBtn;
