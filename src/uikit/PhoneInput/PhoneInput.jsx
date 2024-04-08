import InputMask from 'react-input-mask';
import s from '../Input/Input.module.css';
import ErrorMsg from '../../components/common/ErrorMsg/ErrorMsg.jsx';
import renderInputIcon from '../../helpers/renderInputIcon.js';
import renderStateIcon from '../../helpers/renderStateIcon.js';

const PhoneInput = ({
  name,
  register,
  errors,
  touchedFields,
  defaultValue,
}) => {
  const isError = errors && !!errors[name];
  const isTouched = !!touchedFields[name];

  return (
    <div className={s.container}>
      <InputMask mask="(999) 999-9999" maskChar="_" {...register(name)}>
        {inputProps => (
          <input
            className={s.input}
            placeholder="Phone"
            id={name}
            defaultValue={defaultValue} // Устанавливаем значение по умолчанию
            {...inputProps}
          />
        )}
      </InputMask>
      <span className={s.inputIcon}>{renderInputIcon(name)}</span>
      <span className={s.stateIcon}>{renderStateIcon(isError, isTouched)}</span>
      {isError && <ErrorMsg message={errors[name].message} />}
    </div>
  );
};

export default PhoneInput;
