import { useDispatch } from 'react-redux';
import { updateFavoriteStatus } from '../../../redux/contacts/contactsOperations';
import { StarIcon } from '../../Icon';
import s from './ContactItem.module.css';

const ContactItem = ({ item }) => {
  const dispatch = useDispatch();
  const { _id, name, phone, favorite } = item;

  const toggleFavorite = () => {
    dispatch(updateFavoriteStatus({ id: _id, favorite: !favorite }));
  };

  return (
    <tr className={s.row}>
      <td>{name}</td>
      <td>{phone}</td>
      <td>
        <span
          role="button"
          aria-label="toggle favorite"
          className={favorite ? s.star_white : s.star_plain}
          onClick={toggleFavorite}
        >
          <StarIcon fill={favorite ? '#d4fd02' : '#fff'} className={s.icon} />
        </span>
      </td>
    </tr>
  );
};

export default ContactItem;
