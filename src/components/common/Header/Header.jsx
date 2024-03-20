import Logo from './Logo/Logo';
import NavBar from './NavBar/NavBar';
import AuthNav from './AuthNav/AuthNav';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <Logo />
      <NavBar />
      <AuthNav />
    </header>
  );
};

export default Header;
