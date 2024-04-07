import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useOutsideClickDetector from '../../../../hooks/useOutsideClickDetector.js';
import { getUser } from '../../../../redux/auth/authSelectors.js';
import LogOut from '../../../LogOut/LogOut.jsx';
import { SettingsIcon } from '../../../Icon/index.jsx';
import s from './ProfileMenu.module.css';

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const user = useSelector(getUser);

  useOutsideClickDetector(
    navRef,
    () => {
      setIsOpen(prev => !prev);
    },
    isOpen,
  );

  const handleClick = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div onClick={handleClick} className={s.container}>
      <img src={user.avatarURL} alt="Avatar" className={s.avatar} />
      <span className={s.title}>{user.name}</span>

      {isOpen && (
        <div ref={navRef} className={s.nav}>
          <Link className={s.settings} to="/profile">
            <SettingsIcon className={s.icon} /> User Profile
          </Link>

          <LogOut />
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
