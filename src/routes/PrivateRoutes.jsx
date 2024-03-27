import { Outlet, Navigate } from 'react-router-dom';
import { getLoggedInStatus } from '../redux/auth/authSelectors';
import { useSelector } from 'react-redux';

const PrivateRoutes = () => {
  const user = useSelector(getLoggedInStatus);

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
