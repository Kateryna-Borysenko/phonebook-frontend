import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './ContactList.module.css';
import { getAllContacts } from '../../redux/contacts/contactsOperations';
import ContactItem from './ContactItem/ContactItem';
import { getContacts } from '../../redux/contacts/contactsSelectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  console.log('🌷  contacts:', contacts);

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  return (
    <div className={s.container}>
      {contacts.length !== 0 ? (
        contacts.map(item => <ContactItem key={item._id} item={item} />)
      ) : (
        <p>No contacts found. Please add new contacts to your list.</p>
      )}
    </div>
  );
};

export default ContactList;
