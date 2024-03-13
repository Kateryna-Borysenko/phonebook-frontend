import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../../../uikit/Input/Input';
import { LockIcon, UnlockIcon } from '../../Icon';
import { registrationFormSchema } from '../../../schemas/registrationFormSchema';
import s from './RegisterForm.module.css';

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, touchedFields, isValid },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(registrationFormSchema),
  });

  const onSubmit = data => {
    // console.log('🌷 ~ onSubmit ~ data:', data);
    reset();
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>Registration</h2>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          register={register}
          name="name"
          type="text"
          placeholder="Name"
          errors={errors}
          touchedFields={touchedFields}
        />
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
        <div className={s.passwordWrapper}>
          <Input
            register={register}
            name="confirmPassword"
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirm Password"
            errors={errors}
            touchedFields={touchedFields}
          />
          <button
            className={s.unlockPasswordBtn}
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
              <UnlockIcon className={s.unlockIcon} />
            ) : (
              <LockIcon className={s.lockIcon} />
            )}
          </button>
        </div>
        <button className={s.submitBtn} type="submit" disabled={!isValid}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
