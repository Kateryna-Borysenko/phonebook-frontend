import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/styles/global.module.css';
import s from './App.module.css';
import RegisterForm from '../forms/RegisterForm/RegisterForm';

const App = () => {
  return (
    <div className={s.container}>
      <ToastContainer position="top-right" autoClose={5000} theme="light" />
      <RegisterForm />
      Hello!
    </div>
  );
};

export default App;
