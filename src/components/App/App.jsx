import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/styles/global.module.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Layout from '../common/Layout/Layout';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import SignInPage from '../../pages/SignInPage/SignInPage';
import WelcomePage from '../../pages/WelcomePage/WelcomePage';
import ContactsPage from '../../pages/ContactsPage/ContactsPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import PrivateRoutes from '../../routes/PrivateRoutes';
import EmailConfirmedPage from '../../pages/EmailConfirmedPage/EmailConfirmedPage';
import { logoutUser } from '../../../src/redux/auth/authOperations';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const expirationTime = parseInt(localStorage.getItem('expirationTime'));
    if (expirationTime) {
      const currentTime = Date.now();
      if (currentTime > expirationTime) {
        dispatch(logoutUser());
        localStorage.removeItem('expirationTime');
        navigate('/login');
      }
    }
  }, [dispatch, navigate]);

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} theme="dark" />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WelcomePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="email-confirmed" element={<EmailConfirmedPage />} />
          <Route path="login" element={<SignInPage />} />
          <Route element={<PrivateRoutes />}>
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
