import { useState } from 'react';
import s from './ButtonGroup.module.css';

const ButtonGroup = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = buttonIndex => {
    setActiveButton(buttonIndex);

    if (buttonIndex === 1) {
      console.log('all');
    } else if (buttonIndex === 2) {
      console.log('favorites');
    }
  };

  return (
    <div className={s.container}>
      <button
        onClick={() => handleButtonClick(1)}
        className={activeButton === 1 ? s.activeButton : s.button}
      >
        All
      </button>
      <button
        onClick={() => handleButtonClick(2)}
        className={activeButton === 2 ? s.activeButton : s.button}
      >
        Favorites
      </button>
    </div>
  );
};

export default ButtonGroup;
