import { useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUser } from '../../redux/auth/authSelectors';

const PrivateRoute = ({ children }) => {
  const user = useSelector(getUser);
  const location = useLocation();
  console.log('🌷  location :', location);

  if (!user.email) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};

export default PrivateRoute;
