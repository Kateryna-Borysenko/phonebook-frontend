import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Input from '../../../uikit/Input/Input';
import { LockIcon, UnlockIcon } from '../../Icon';
import { signInFormSchema } from '../../../schemas/signInFormSchema';
import s from './SignInForm.module.css';
import Spinner from '../../common/Spinner/Spinner';
import { getLoading } from '../../../redux/auth/authSelectors';
import { loginUser } from '../../../redux/auth/authOperations';
import GoogleAuth from '../../GoogleAuth/GoogleAuth';

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const loading = useSelector(getLoading);
  const dispatch = useDispatch();

  const initialFormValues = {
    email: 'k.bor@ukr.net',
    password: 'Qwe12345!',
  }; //!test

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, touchedFields, isValid },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(signInFormSchema),
    defaultValues: initialFormValues, //!test
  });

  const onSubmit = data => {
    console.log('🌷 ~ onSubmit ~ data:', data);
    dispatch(loginUser(data));
    reset();
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>Sign In</h2>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          register={register}
          name="email"
          type="text"
          placeholder="Email"
          errors={errors}
          touchedFields={touchedFields}
        />
        <div className={s.passwordWrapper}>
          <Input
            register={register}
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            errors={errors}
            touchedFields={touchedFields}
          />
          <button
            className={s.unlockPasswordBtn}
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <UnlockIcon className={s.unlockIcon} />
            ) : (
              <LockIcon className={s.lockIcon} />
            )}
          </button>
        </div>

        <button className={s.submitBtn} type="submit" disabled={!isValid}>
          {loading ? <Spinner color="#fff" size="10px" /> : 'Sign In'}
        </button>
      </form>
      <span className={s.text}>or</span>
      <GoogleAuth title="Log In with Google" />
      <p className={s.message}>
        New Here?<Link to="/register">Register</Link>
      </p>
      <p className={s.message}>
        <Link to="/password-reset-token">Forgot your password?</Link>
      </p>
    </div>
  );
};

export default SignInForm;
