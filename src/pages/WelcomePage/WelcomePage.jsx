import s from './WelcomePage.module.css';
import Meta from '../../components/common/Meta/Meta';
import ContactForm from '../../components/forms/ContactForm/ContactForm';

const WelcomePage = () => {
  return (
    <div className={s.container}>
      <Meta />
      WelcomePage
      <ContactForm />
    </div>
  );
};

export default WelcomePage;
