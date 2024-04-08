import { useNavigate } from 'react-router-dom';
import s from './GoBack.module.css';

const GoBack = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <button className={s.button} onClick={handleGoBack}>
      ◀ Go Back to Contact
    </button>
  );
};

export default GoBack;
