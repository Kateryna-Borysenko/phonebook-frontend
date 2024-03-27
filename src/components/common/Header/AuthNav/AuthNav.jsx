import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getLoggedInStatus } from '../../../../redux/auth/authSelectors';
import Profile from '../Profile/Profile';
import s from './AuthNav.module.css';

const AuthNav = () => {
  const isLoggedIn = useSelector(getLoggedInStatus);

  return (
    <nav className={s.container}>
      {isLoggedIn && (
        <>
          <Profile />
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link className={s.link} to="/login">
            Log In
          </Link>
          <Link className={s.link} to="/register">
            Register
          </Link>
        </>
      )}
    </nav>
  );
};

export default AuthNav;
