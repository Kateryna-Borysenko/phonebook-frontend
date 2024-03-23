import s from './ContactItem.module.css';

const ContactItem = ({ item }) => {
  const { _id: id, name, email, phone, favorite } = item;

  return (
    <div className={s.container}>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Favorite: {favorite ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default ContactItem;
