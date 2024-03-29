import React from 'react';
import s from './ButtonGroup.module.css';

const ButtonGroup = ({ activeButton, onAllClick, onFavoritesClick }) => {
  return (
    <div className={s.container}>
      <button
        onClick={onAllClick}
        className={activeButton === 'All' ? s.activeButton : s.button}
      >
        All
      </button>
      <button
        onClick={onFavoritesClick}
        className={activeButton === 'Favorites' ? s.activeButton : s.button}
      >
        Favorites
      </button>
    </div>
  );
};

export default ButtonGroup;
