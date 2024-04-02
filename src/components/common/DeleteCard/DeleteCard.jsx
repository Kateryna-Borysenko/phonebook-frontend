import s from './DeleteCard.module.css';

const DeleteCard = ({ onDelete, onClose }) => {
  return (
    <>
      <h2 className={s.title}>Confirm contact deletion.</h2>
      <div className={s.btnWrapper}>
        <button className={s.cancelBtn} type="button" onClick={onClose}>
          cancel
        </button>
        <button className={s.yesBtn} type="button" onClick={onDelete}>
          yes
        </button>
      </div>
    </>
  );
};

export default DeleteCard;
