import { ErrorIcon, SuccessIcon } from '../components/Icon';

const renderStateIcon = (isError, isTouched) => {
  if (isError) {
    return <ErrorIcon />;
  } else if (!isError && isTouched === true) {
    return <SuccessIcon />;
  } else {
    return null;
  }
};

export default renderStateIcon;
