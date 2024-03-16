import SignInForm from '../../components/forms/SignInForm/SignInForm';
import s from './SignInPage.module.css';

const SignInPage = () => {
  return (
    <div className={s.container}>
      <SignInForm />
    </div>
  );
};

export default SignInPage;
