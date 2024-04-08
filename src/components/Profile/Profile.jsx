import { useSelector } from 'react-redux';
import { getUser } from '../../redux/auth/authSelectors';
import ImageInput from '../../uikit/ImageInput/ImageInput';
import s from './Profile.module.css';

const Profile = () => {
  const user = useSelector(getUser);
  const { name, email, avatarURL, subscription } = user;

  return (
    <div className={s.container}>
      <div className={s.subscription}>
        Subscription: <span>{subscription}</span>
      </div>
      <div className={s.avatarWrapper}>
        <ImageInput savedImage={avatarURL} />
        <div className={s.avatarPopup}>Upload new avatar</div>
      </div>
      <div className={s.name}>{name}</div>
      <div>Email: {email}</div>
    </div>
  );
};

export default Profile;
