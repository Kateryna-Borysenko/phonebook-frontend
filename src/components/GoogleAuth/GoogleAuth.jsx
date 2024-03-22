import { GoogleIcon } from '../Icon';
import s from './GoogleAuth.module.css';

const GoogleAuth = ({ title, onClick }) => {
  const handleGoogleAuth = () => {};

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
