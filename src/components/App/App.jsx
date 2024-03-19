import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/styles/global.module.css';
import Container from '../common/Container/Container';
import s from './App.module.css';

const App = () => {
  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} theme="light" />

      <Container>
        {/* <Header /> */}
        <main className="py-3">
          <Outlet />
        </main>
        {/* <Footer /> */}
      </Container>
    </>
  );
};

export default App;
