import { useDispatch } from 'react-redux';
import { initiateGoogleAuth } from '../../redux/auth/authOperations';
import { GoogleIcon } from '../Icon';
import s from './GoogleAuth.module.css';

const GoogleAuth = ({ title, onClick }) => {
  // const dispatch = useDispatch();

  const handleGoogleAuth = () => {
    // dispatch(initiateGoogleAuth());
    window.open(
      `http://localhost:5000/auth/google`,
      '_self', //что-бы открылась на той же странице
    );
  };

  return (
    <div className={s.container}>
      <button className={s.button} onClick={handleGoogleAuth}>
        <GoogleIcon className={s.icon} />
        {title}
      </button>
    </div>
  );
};

export default GoogleAuth;
