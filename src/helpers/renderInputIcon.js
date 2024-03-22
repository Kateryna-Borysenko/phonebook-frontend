import { UserIcon, EmailIcon, PhoneIcon } from '../components/Icon';

const renderInputIcon = name => {
  switch (name) {
    case 'name':
      return <UserIcon />;
    case 'email':
      return <EmailIcon />;
    case 'phone':
      return <PhoneIcon />;
    default:
      return null;
  }
};

export default renderInputIcon;
