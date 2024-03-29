import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLoading } from '../../redux/contacts/contactsSelectors';
import {
  getAllContacts,
  getFavoriteContacts,
} from '../../redux/contacts/contactsOperations';
import {
  getContacts,
  getFavorites,
} from '../../redux/contacts/contactsSelectors';
import ContactItem from './ContactItem/ContactItem';
import Spinner from '../common/Spinner/Spinner';
import ButtonGroup from '../../uikit/ButtonGroup/ButtonGroup';
import s from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const favorites = useSelector(getFavorites);
  const loading = useSelector(getLoading);
  const [showFavorites, setShowFavorites] = useState(false);
  const [activeButton, setActiveButton] = useState('All');

  useEffect(() => {
    if (showFavorites) {
      dispatch(getFavoriteContacts());
    } else {
      dispatch(getAllContacts());
    }
  }, [dispatch, showFavorites]);

  const sortedAndGroupedContacts = contacts => {
    const sortedContacts = [...contacts].sort((a, b) =>
      a.name.localeCompare(b.name),
    );
    const groupedContacts = {};

    sortedContacts.forEach(contact => {
      if (contact && contact.name) {
        const firstLetter = contact.name.charAt(0).toUpperCase();
        if (!groupedContacts[firstLetter]) {
          groupedContacts[firstLetter] = [];
        }
        groupedContacts[firstLetter].push(contact);
      }
    });

    return groupedContacts;
  };

  const handleShowFavorites = () => {
    setShowFavorites(true);
    setActiveButton('Favorites');
  };

  const handleShowAll = () => {
    setShowFavorites(false);
    setActiveButton('All');
  };

  return (
    <>
      {loading ? (
        <div className={s.spinner_container}>
          <h1 className="Title">Contact List :</h1>
          <Spinner color="#d4fd02" size="10px" className={s.spinner} />
        </div>
      ) : (
        <div className={s.container}>
          <h1 className="Title">Contact List : </h1>
          <ButtonGroup
            activeButton={activeButton}
            onFavoritesClick={handleShowFavorites}
            onAllClick={handleShowAll}
          />
          {(showFavorites && Object.keys(favorites).length !== 0) ||
          (!showFavorites && Object.keys(contacts).length !== 0) ? (
            <>
              {showFavorites
                ? Object.entries(sortedAndGroupedContacts(favorites)).map(
                    ([letter, contacts]) => (
                      <div key={letter}>
                        <div className={s.groupLetter}>{letter}</div>
                        <table className={s.table}>
                          <tbody>
                            {contacts.map(contact => (
                              <ContactItem key={contact._id} item={contact} />
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ),
                  )
                : Object.entries(sortedAndGroupedContacts(contacts)).map(
                    ([letter, contacts]) => (
                      <div key={letter}>
                        <div className={s.groupLetter}>{letter}</div>
                        <table className={s.table}>
                          <tbody>
                            {contacts.map(contact => (
                              <ContactItem key={contact._id} item={contact} />
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ),
                  )}
            </>
          ) : (
            <p className={s.message}>
              {showFavorites
                ? 'No favorite contacts found.'
                : 'No contacts found. Please add new contacts to your list.'}
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default ContactList;
