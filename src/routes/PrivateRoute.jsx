import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUser } from '../redux/auth/authSelectors';

const PrivateRoute = () => {
  const user = useSelector(getUser);
  return user ? <Outlet /> : <Navigate to="/register" replace />;
};
export default PrivateRoute;
