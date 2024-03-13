import { UserIcon, EmailIcon } from '../components/Icon';

const renderInputIcon = name => {
  switch (name) {
    case 'name':
      return <UserIcon />;
    case 'email':
      return <EmailIcon />;
    default:
      return null;
  }
};

export default renderInputIcon;
