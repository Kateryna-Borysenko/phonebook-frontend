import { useDispatch } from 'react-redux';
import { initiateGoogleAuth } from '../../redux/auth/authOperations';
import { GoogleIcon, PhoneBookIcon } from '../Icon';
import s from './GoogleAuth.module.css';

const GoogleAuth = ({ title }) => {
  const dispatch = useDispatch();

  const handleGoogleAuth = () => {
    dispatch(initiateGoogleAuth());
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
