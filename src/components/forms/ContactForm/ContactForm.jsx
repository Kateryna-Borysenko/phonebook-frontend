import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';
import Input from '../../../uikit/Input/Input';
import { contactFormSchema } from '../../../schemas/contactFormSchema';
import { normalizeUserName } from '../../../helpers/normalizeUserName';
import Spinner from '../../common/Spinner/Spinner';
import s from './ContactForm.module.css';
import PhoneInput from '../../../uikit/PhoneInput/PhoneInput';

const ContactForm = () => {
  // const loading = useSelector(getLoading);
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  // const initialFormValues = {
  //   avatarURL: '',
  //   name: 'kate',
  //   email: 'k.bor@ukr.net',
  //   phone: '1234567890',
  // }; //!test

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isValid },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(contactFormSchema),
    // defaultValues: initialFormValues, //!test
  });

  const onSubmit = data => {
    console.log('🌷  data:', data);
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>Contact Form</h2>
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
        <PhoneInput
          name="phone"
          register={register}
          errors={errors}
          touchedFields={touchedFields}
        />

        <button className={s.submitBtn} type="submit" disabled={!isValid}>
          {/* {loading ? <Spinner color="#fff" size="10px" /> : 'Add contact'} */}
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
