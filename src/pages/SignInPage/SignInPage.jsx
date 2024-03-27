import Meta from '../../components/common/Meta/Meta';
import SignInForm from '../../components/forms/SignInForm/SignInForm';
import s from './SignInPage.module.css';

const SignInPage = () => {
  return (
    <div className="Wrapper">
      <Meta title="Sign In" />
      <SignInForm />
    </div>
  );
};

export default SignInPage;
