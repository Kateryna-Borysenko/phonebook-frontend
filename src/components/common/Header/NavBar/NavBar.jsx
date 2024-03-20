import { useSelector } from 'react-redux';
import { getUser } from '../../../../redux/auth/authSelectors';
import CustomLink from '../../../CustomLink/CustomLink';
import s from './NavBar.module.css';

const NavBar = () => {
  const user = useSelector(getUser);
  const isUser = !!user;

  return (
    <nav className={s.nav}>
      <CustomLink to="/">Home</CustomLink>
      {isUser && (
        <>
          <CustomLink to="/contacts">Contacts</CustomLink>
          <CustomLink to="/subscription">Subscription</CustomLink>
        </>
      )}
    </nav>
  );
};

export default NavBar;
