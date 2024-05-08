import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../../uikit/Input/Input';
import { contactFormSchema } from '../../../schemas/contactFormSchema';
import { normalizeUserName } from '../../../helpers/normalizeUserName';
import Spinner from '../../common/Spinner/Spinner';
import PhoneInput from '../../../uikit/PhoneInput/PhoneInput';
import { getLoading } from '../../../redux/contacts/contactsSelectors';
import { createContact } from '../../../redux/contacts/contactsOperations';
import s from './ContactForm.module.css';

const ContactForm = () => {
  const loading = useSelector(getLoading);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isValid },
    reset,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(contactFormSchema),
  });

  const onSubmit = data => {
    let normalizedData = {
      name: normalizeUserName(data.name),
      phone: data.phone,
    };

    dispatch(createContact(normalizedData));
    reset();
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
        <PhoneInput
          name="phone"
          register={register}
          errors={errors}
          touchedFields={touchedFields}
        />

        <button className={s.submitBtn} type="submit" disabled={!isValid}>
          {loading ? <Spinner color="#fff" size="10px" /> : 'Add Contact'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
