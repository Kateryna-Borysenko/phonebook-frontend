import ToggleButton from '../../uikit/ToggleButton/ToggleButton';
import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/forms/ContactForm/ContactForm';
import s from './ContactsPage.module.css';
import Meta from '../../components/common/Meta/Meta';

const ContactsPage = () => {
  return (
    <div className={s.container}>
      <Meta
        title="
      Contacts"
      />
      <ToggleButton
        titleToOpen="Add Contact"
        titleToClose="Cancel Adding Contact"
      >
        <ContactForm />
      </ToggleButton>

      <ContactList />
    </div>
  );
};

export default ContactsPage;
