import { Link } from 'react-router-dom';
import { PhoneBookIcon } from '../../../Icon';
import s from './Logo.module.css';

const Logo = () => {
  return (
    <Link to="/" className={s.container}>
      <PhoneBookIcon width={40} fill="#8baa36" />
      <div className={s.title}>PhoneBook</div>
    </Link>
  );
};

export default Logo;
