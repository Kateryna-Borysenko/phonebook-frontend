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
import s from './EditContactForm.module.css';

const EditContactForm = ({ onClose }) => {
  // const loading = useSelector(getLoading);
  const loading = false;
  const dispatch = useDispatch();

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
    let normalizedData = {
      name: normalizeUserName(data.name),
      phone: data.phone,
    };

    dispatch(createContact(normalizedData));
    // reset();

    console.log('🌷  data:', normalizedData);
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>Edit Contact</h2>
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
        <div className={s.btnWrapper}>
          <button className={s.cancelBtn} type="button" onClick={onClose}>
            cancel
          </button>
          <button className={s.editBtn} type="submit" disabled={!isValid}>
            {loading ? <Spinner color="#fff" size="10px" /> : 'Edit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditContactForm;
