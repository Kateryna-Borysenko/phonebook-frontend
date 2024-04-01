import { useDispatch } from 'react-redux';
import { getSingleContact } from '../../../redux/contacts/contactsOperations';
import { StarIcon, UserIcon } from '../../Icon';
import s from './ContactItem.module.css';
import { useNavigate } from 'react-router-dom';

const ContactItem = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { _id, name, phone, favorite } = item;

  const handleClick = () => {
    dispatch(getSingleContact({ id: _id }));
    navigate(`/contacts/${_id}`);
  };

  return (
    <tr className={s.row} onClick={handleClick}>
      <td>
        <UserIcon stroke="#fff" className={s.avatar} />
      </td>
      <td>{name}</td>
      <td>{phone}</td>
      <td>
        <span className={favorite ? s.star_white : s.star_plain}>
          <StarIcon fill={favorite ? '#d4fd02' : '#fff'} className={s.icon} />
        </span>
      </td>
    </tr>
  );
};

export default ContactItem;
