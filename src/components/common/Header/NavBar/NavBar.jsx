import { useSelector } from 'react-redux';
import { getLoggedInStatus } from '../../../../redux/auth/authSelectors';
import CustomLink from '../../../CustomLink/CustomLink';
import s from './NavBar.module.css';

const NavBar = () => {
  const isLoggedIn = useSelector(getLoggedInStatus);

  return (
    <>
      {isLoggedIn && (
        <nav className={s.nav}>
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/contacts">Contacts</CustomLink>
          <CustomLink to="/subscription">Subscription</CustomLink>
        </nav>
      )}
    </>
  );
};

export default NavBar;
