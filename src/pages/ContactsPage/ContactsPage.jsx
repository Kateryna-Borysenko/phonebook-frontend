import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/forms/ContactForm/ContactForm';
import s from './ContactsPage.module.css';

const ContactsPage = () => {
  return (
    <div className={s.container}>
      <h1>Contact Page</h1>
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
