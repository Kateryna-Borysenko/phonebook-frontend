import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFavoriteStatus } from '../../redux/contacts/contactsOperations';
import { getSingleContact } from '../../redux/contacts/contactsSelectors';
import { StarIcon, UserIcon } from '../../components/Icon';
import s from './SingleContactPage.module.css';

const SingleContactPage = () => {
  const dispatch = useDispatch();
  const contact = useSelector(getSingleContact);
  const { _id, name, phone, favorite } = contact;
  const [isFavorite, setIsFavorite] = useState(favorite);

  useEffect(() => {
    setIsFavorite(favorite);
  }, [favorite]);

  const toggleFavorite = () => {
    dispatch(updateFavoriteStatus({ id: _id, favorite: !isFavorite }));
    setIsFavorite(prev => !prev);
  };

  return (
    <div className={s.container}>
      <div className={s.avatarWrapper}>
        <UserIcon stroke="white" className={s.avatar} />
        <div className={s.avatarPopup}>Upload new avatar</div>
      </div>
      <div className={s.nameWrapper}>
        <div className={s.name}>{name} </div>
        <span
          role="button"
          aria-label="toggle favorite"
          className={isFavorite ? s.star_white : s.star_plain}
          onClick={toggleFavorite}
        >
          <StarIcon fill={isFavorite ? '#d4fd02' : '#fff'} className={s.star} />
        </span>
        <div className={s.favoritePopup}>Change favorite status</div>
      </div>
      <div className={s.phone}>{phone}</div>

      <div className={s.btnWrapper}>
        <button className={s.editBtn} type="button" disabled="">
          Edit
        </button>
        <button className={s.deleteBtn} type="button">
          Delete
        </button>
      </div>
    </div>
  );
};

export default SingleContactPage;
