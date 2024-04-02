import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContact,
  updateFavoriteStatus,
} from '../../redux/contacts/contactsOperations';
import { getSingleContact } from '../../redux/contacts/contactsSelectors';
import Meta from '../../components/common/Meta/Meta';
import Modal from '../../components/common/Modal/Modal';
import DeLeteCard from '../../components/common/DeleteCard/DeleteCard';
import { StarIcon, UserIcon } from '../../components/Icon';
import s from './SingleContactPage.module.css';
import { useNavigate } from 'react-router-dom';

const SingleContactPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const contact = useSelector(getSingleContact);
  const { _id, name, phone, favorite } = contact;
  const [isFavorite, setIsFavorite] = useState(favorite);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsFavorite(favorite);
  }, [favorite]);

  const toggleFavorite = () => {
    dispatch(updateFavoriteStatus({ id: _id, favorite: !isFavorite }));
    setIsFavorite(prev => !prev);
  };

  const toggleModal = () => {
    setIsOpen(prev => !prev);
  };

  const handleDeleteContact = () => {
    dispatch(deleteContact({ id: _id }));
    toggleModal();
    navigate('/contacts');
  };

  return (
    <div className={s.container}>
      {contact && (
        <>
          <Meta title="Contact Details" />
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
              <StarIcon
                fill={isFavorite ? '#d4fd02' : '#fff'}
                className={s.star}
              />
            </span>
            <div className={s.favoritePopup}>Change favorite status</div>
          </div>
          <div className={s.phone}>{phone}</div>

          <div className={s.btnWrapper}>
            <button onClick={toggleModal} className={s.deleteBtn} type="button">
              Delete
            </button>
            <button
              onClick={toggleModal}
              className={s.editBtn}
              type="button"
              disabled=""
            >
              Edit
            </button>
          </div>
          {isOpen && (
            <Modal onClose={toggleModal}>
              <DeLeteCard
                onClose={toggleModal}
                onDelete={handleDeleteContact}
              />
            </Modal>
          )}
        </>
      )}
    </div>
  );
};

export default SingleContactPage;
