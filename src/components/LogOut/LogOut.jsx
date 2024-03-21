import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/auth/authOperations';
import s from './LogOut.module.css';

const LogOut = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <button className={s.button} onClick={handleLogout}>
      Log Out
    </button>
  );
};

export default LogOut;
