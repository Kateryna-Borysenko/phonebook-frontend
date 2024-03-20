import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser } from '../../../../redux/auth/authSelectors';
import Profile from '../Profile/Profile';
import s from './AuthNav.module.css';

const AuthNav = () => {
  const user = useSelector(getUser);
  const isUser = !!user.email;
  return (
    <nav className={s.container}>
      {isUser && (
        <>
          <Profile />
          <Link to="/logout">Log Out</Link>
        </>
      )}
      {!isUser && (
        <>
          <Link to="/login">Log In</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
};

export default AuthNav;
