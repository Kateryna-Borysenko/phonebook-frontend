import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../redux/auth/authOperations';
import { LogOutIcon } from '../Icon';
import s from './LogOut.module.css';

const LogOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  return (
    <button className={s.button} onClick={handleLogout}>
      <LogOutIcon className={s.icon} /> Log Out
    </button>
  );
};

export default LogOut;
