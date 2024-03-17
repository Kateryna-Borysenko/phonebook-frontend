import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { HelmetProvider } from 'react-helmet-async';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import PrivateRoute from '../src/routes/PrivateRoute';
import { store, persistor } from './redux/store';
import App from './components/App/App';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import SignInPage from './pages/SignInPage/SignInPage';
import VerifyPage from './pages/VerifyPage/VerifyPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<WelcomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<SignInPage />} />
      <Route path="/verify" element={<VerifyPage />} />
      {/* Registered users */}
      <Route path="" element={<PrivateRoute />}>
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <HelmetProvider>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </HelmetProvider>
    </PersistGate>
  </React.StrictMode>,
);
