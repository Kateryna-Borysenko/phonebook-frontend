import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './ContactList.module.css';
import { getAllContacts } from '../../redux/contacts/contactsOperations';
import ContactItem from './ContactItem/ContactItem';
import Spinner from '../common/Spinner/Spinner';
import { getLoading } from '../../redux/contacts/contactsSelectors';
import { getContacts } from '../../redux/contacts/contactsSelectors';
import ButtonGroup from '../../uikit/ButtonGroup/ButtonGroup';

//TODO: pagination and filter /all/favorites

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const loading = useSelector(getLoading);

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  const sortedAndGroupedContacts = useMemo(() => {
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
  }, [contacts]);

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
          <ButtonGroup />
          {Object.entries(sortedAndGroupedContacts).map(
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
          {Object.keys(sortedAndGroupedContacts).length === 0 && (
            <p className={s.message}>
              No contacts found. Please add new contacts to your list.
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default ContactList;
