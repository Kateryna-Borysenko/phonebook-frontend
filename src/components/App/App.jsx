import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/styles/global.module.css';
import { Routes, Route } from 'react-router-dom';
import Layout from '../common/Layout/Layout';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import SignInPage from '../../pages/SignInPage/SignInPage';
import WelcomePage from '../../pages/WelcomePage/WelcomePage';
import ContactsPage from '../../pages/ContactsPage/ContactsPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import PrivateRoutes from '../../routes/PrivateRoutes';
import EmailConfirmedPage from '../../pages/EmailConfirmedPage/EmailConfirmedPage';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
import SingleContactPage from '../../pages/SingleContactPage/SingleContactPage';
import Spinner from '../common/Spinner/Spinner';
import { refreshUser } from '../../redux/auth/authOperations';
import { useAuth } from '../../hooks/useAuth';

const App = () => {
  const dispatch = useDispatch();

  const { refreshingStatus } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (refreshingStatus) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#121212fa',
          height: '100vh',
        }}
      >
        <div>
          <Spinner size="20px" />
        </div>
      </div>
    );
  }

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
            <Route path="contacts/:id" element={<SingleContactPage />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
