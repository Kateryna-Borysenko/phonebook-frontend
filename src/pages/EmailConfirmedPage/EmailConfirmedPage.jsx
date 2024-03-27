import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CongratsIcon } from '../../components/Icon';
import Meta from '../../components/common/Meta/Meta';
import s from './EmailConfirmedPage.module.css';

const EmailConfirmedPage = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prevCountdown => prevCountdown - 1);
    }, 1000);

    const timer = setTimeout(() => {
      navigate('/login');
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <div className="Wrapper">
      <Meta title="Congrats" />

      <div className={s.container}>
        <h1 className={s.title}>Your email confirmed successfully!</h1>
        <CongratsIcon className={s.icon} />
        <div className={s.description}>
          You will be redirected to
          <span className={s.accent}> Sign In </span> after
          <span className={s.accent}> {countdown}</span> seconds.
        </div>
      </div>
    </div>
  );
};

export default EmailConfirmedPage;
