import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser } from '../../../../redux/auth/authSelectors';
import Profile from '../Profile/Profile';
import LogOut from '../../../LogOut/LogOut';
import s from './AuthNav.module.css';

const AuthNav = () => {
  const user = useSelector(getUser);
  console.log('🌷  user:', user);
  const isUser = !!user.email;
  return (
    <nav className={s.container}>
      {isUser && (
        <>
          <Profile />
          <LogOut />
        </>
      )}
      {!isUser && (
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
