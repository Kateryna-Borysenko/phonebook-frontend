import Meta from '../../components/common/Meta/Meta';
import { WelcomeIcon } from '../../components/Icon';
import s from './WelcomePage.module.css';

const WelcomePage = () => {
  return (
    <div className="Wrapper">
      <Meta />
      <div className={s.container}>
        <h1 className={s.title}>Welcome to PhoneBook App</h1>
        <WelcomeIcon className={s.icon} />
        <p className={s.description}>
          This is your personal phone book application where you can manage your
          contacts easily.
        </p>
      </div>
    </div>
  );
};

export default WelcomePage;
