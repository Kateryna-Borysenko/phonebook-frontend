import ErrorMsg from '../../components/common/ErrorMsg/ErrorMsg';
import renderInputIcon from '../../helpers/renderInputIcon.js';
import renderStateIcon from '../../helpers/renderStateIcon.js';
import s from './Input.module.css';

const Input = ({
  register,
  name,
  type,
  placeholder,
  errors,
  touchedFields,
}) => {
  const isError = errors && !!errors[name];
  const isTouched = !!touchedFields[name];

  return (
    <div className={s.container}>
      <input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className={s.input}
      />
      <span className={s.inputIcon}>{renderInputIcon(name)}</span>
      <span className={s.stateIcon}>{renderStateIcon(isError, isTouched)}</span>
      {isError && <ErrorMsg message={errors[name].message} />}
    </div>
  );
};

export default Input;
