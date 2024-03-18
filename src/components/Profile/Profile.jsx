import { useSelector } from 'react-redux';
import { getUser } from '../../redux/auth/authSelectors';
import s from './Profile.module.css';

const Profile = () => {
  const user = useSelector(getUser);

  const { name, avatarURL } = user;
  return (
    <div className={s.container}>
      <span>{name}</span>
      <img src={avatarURL} alt="avatar" />
    </div>
  );
};

export default Profile;
