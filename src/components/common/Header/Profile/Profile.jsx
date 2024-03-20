import { Link } from 'react-router-dom';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <Link to="/portfolio" className={s.container}>
      Profile
    </Link>
  );
};

export default Profile;
