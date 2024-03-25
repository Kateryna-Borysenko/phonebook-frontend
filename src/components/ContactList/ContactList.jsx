import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './ContactList.module.css';
import { getAllContacts } from '../../redux/contacts/contactsOperations';
import ContactItem from './ContactItem/ContactItem';
import { getContacts } from '../../redux/contacts/contactsSelectors';

//TODO: pagination and filter /all/favorites

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

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
    <div className={s.container}>
      <h1 className="Title">Contact List : </h1>
      {Object.entries(sortedAndGroupedContacts).map(([letter, contacts]) => (
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
      ))}
      {Object.keys(sortedAndGroupedContacts).length === 0 && (
        <p className={s.message}>
          No contacts found. Please add new contacts to your list.
        </p>
      )}
    </div>
  );
};

export default ContactList;
