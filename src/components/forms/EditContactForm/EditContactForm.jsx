import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Input from '../../../uikit/Input/Input';
import Spinner from '../../common/Spinner/Spinner';
import PhoneInput from '../../../uikit/PhoneInput/PhoneInput';
import { contactFormSchema } from '../../../schemas/contactFormSchema';
import { normalizeUserName } from '../../../helpers/normalizeUserName';
import {
  getLoading,
  getSingleContact,
} from '../../../redux/contacts/contactsSelectors';
import { editContact } from '../../../redux/contacts/contactsOperations';
import s from './EditContactForm.module.css';

const EditContactForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector(getLoading);
  const contact = useSelector(getSingleContact);

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(contactFormSchema),
  });

  const onSubmit = data => {
    const normalizedData = {
      name: normalizeUserName(data.name),
      phone: data.phone,
    };
    dispatch(
      editContact({ id: contact._id, updatedData: normalizedData }),
    ).then(() => navigate('/contacts'));
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
          defaultValue={contact ? contact.name : ''}
          errors={errors}
          touchedFields={touchedFields}
        />
        <PhoneInput
          name="phone"
          register={register}
          defaultValue={contact ? contact.phone : ''}
          errors={errors}
          touchedFields={touchedFields}
        />
        <div className={s.btnWrapper}>
          <button className={s.cancelBtn} type="button" onClick={onClose}>
            Cancel
          </button>
          <button className={s.editBtn} type="submit">
            {loading ? <Spinner color="#fff" size="10px" /> : 'Edit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditContactForm;
