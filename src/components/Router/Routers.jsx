import { Routes, Route } from 'react-router-dom';
import WelcomePage from '../../pages/WelcomePage/WelcomePage';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import SignInPage from '../../pages/SignInPage/SignInPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import ContactsPage from '../../pages/ContactsPage/ContactsPage';
import PrivateRoute from './PrivateRoute';
import Layout from '../../pages/Layout/Layout';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<WelcomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="" element={<PrivateRoute />}>
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default Routers;
