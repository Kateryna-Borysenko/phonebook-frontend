import RegisterForm from '../../components/forms/RegisterForm/RegisterForm';
import s from './RegisterPage.module.css';

const RegisterPage = () => {
  return (
    <div className={s.container}>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
