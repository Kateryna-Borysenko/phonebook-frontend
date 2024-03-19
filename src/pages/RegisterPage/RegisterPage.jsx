import RegisterForm from '../../components/forms/RegisterForm/RegisterForm';
import Meta from '../../components/common/Meta/Meta';
import s from './RegisterPage.module.css';

const RegisterPage = () => {
  return (
    <div className="Wrapper">
      <Meta title="Registration" />
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
