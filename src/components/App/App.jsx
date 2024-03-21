import React, { useEffect } from 'react';
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
import PrivateRoute from '../routes/PrivateRoute';
import { useSelector } from 'react-redux';
import { getUser } from '../../redux/auth/authSelectors';

const App = () => {
  const user = useSelector(getUser);

  useEffect(() => {
    if (!user.email) {
      <Navigate to="/login" />;
    }
  }, [user]);

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} theme="light" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WelcomePage />} />
          <Route
            path="/register"
            element={<RegisterPage />}
            redirect="/login"
          />
          <Route path="/login" element={<SignInPage />} />
          {/* <Route
            path="contacts"
            element={<PrivateRoute component={<ContactsPage />} />}
          /> */}

          {user.email && <Route path="/contacts" element={<ContactsPage />} />}

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
