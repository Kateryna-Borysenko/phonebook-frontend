import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser } from '../../../../redux/auth/authSelectors';
import s from './Profile.module.css';

const Profile = () => {
  const user = useSelector(getUser);
  return (
    <Link to="/profile" className={s.container}>
      <img src={user.avatarURL} alt="Avatar" className={s.avatar} />{' '}
      <span className={s.title}>{user.name}</span>
    </Link>
  );
};

export default Profile;
