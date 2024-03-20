import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/styles/global.module.css';
import Routers from '../Router/Routers';

const App = () => {
  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} theme="light" />
      <Routers />
    </>
  );
};

export default App;
