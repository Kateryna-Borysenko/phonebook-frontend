import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/styles/global.module.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from '../common/Layout/Layout';
import WelcomePage from '../../pages/WelcomePage/WelcomePage';
import ContactsPage from '../../pages/ContactsPage/ContactsPage';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import SignInPage from '../../pages/SignInPage/SignInPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import { useSelector } from 'react-redux';
import { getLoggedInStatus } from '../../redux/auth/authSelectors';
import SubscriptionPage from '../../pages/SubscriptionPage/SubscriptionPage';
import EmailConfirmedPage from '../../pages/EmailConfirmedPage/EmailConfirmedPage';

const App = () => {
  const isLoggedIn = useSelector(getLoggedInStatus);
  // const isLoggedIn = false;

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} theme="dark" />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WelcomePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route
            path="login"
            element={isLoggedIn ? <Navigate to="/contacts" /> : <SignInPage />}
          />
          {isLoggedIn && <Route path="contacts" element={<ContactsPage />} />}
          {isLoggedIn && (
            <Route path="subscription" element={<SubscriptionPage />} />
          )}
          <Route path="email-confirmed" element={<EmailConfirmedPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
