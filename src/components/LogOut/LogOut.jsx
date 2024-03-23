import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/auth/authOperations';
import s from './LogOut.module.css';
import { useNavigate } from 'react-router-dom';

const LogOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  return (
    <button className={s.button} onClick={handleLogout}>
      Log Out
    </button>
  );
};

export default LogOut;
