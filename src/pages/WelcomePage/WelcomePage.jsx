import Meta from '../../components/common/Meta/Meta';
import { WelcomeIcon } from '../../components/Icon';
import s from './WelcomePage.module.css';

const WelcomePage = () => {
  return (
    <div className="Wrapper">
      <Meta />
      <div className={s.container}>
        <h1 className={s.title}>Welcome to PhoneBook App</h1>
        <div className={s.ring}>
          <i style={{ '--clr': '#00ff0a' }}></i>
          <i style={{ '--clr': '#9d0159' }}></i>
          <i style={{ '--clr': '#fffd44' }}></i>
          <WelcomeIcon className={s.icon} />
        </div>
        <p className={s.description}>
          This is your personal phone book application where you can manage your
          contacts easily.
        </p>
      </div>
    </div>
  );
};

export default WelcomePage;
