import { StarIcon } from '../../Icon';
import s from './ContactItem.module.css';

const ContactItem = ({ item }) => {
  const { name, phone, favorite } = item;
  return (
    <tr className={s.row}>
      <td>{name}</td>
      <td>{phone}</td>
      <td>
        {favorite ? (
          <span role="img" aria-label="favorite" className={s.star_white}>
            <StarIcon fill="#d4fd02" />
          </span>
        ) : (
          <span role="img" aria-label="not favorite" className={s.star_plain}>
            <StarIcon />
          </span>
        )}
      </td>
    </tr>
  );
};

export default ContactItem;
