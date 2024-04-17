import React from 'react';
import ReactDOM from 'react-dom/client';

import "./assets/css/materialdesignicons.min.css";
import "./assets/scss/themes.scss";

import reportWebVitals from './reportWebVitals';
import './i18n';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import LandingPage from './pages/landing';
import Agency from './pages/agency';
import Portfolio from './pages/portfolio';
import Maintenance from './pages/maintenance';
import Error from './pages/error';
import Login from './pages/auth/login';
import Signup from './pages/auth/signup';
import ResetPassword from './pages/auth/reset-password';
import Comingsoon from './pages/comingsoon';
import Personal from './pages/personal';
import Saas from './pages/saas';
import Startup from './pages/startup';
import PrivacyPolicy from './pages/privacy-policy';
import Terms from './pages/terms';
import Faq from './pages/faq';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      {/* <App /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/marketing" element={<LandingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/faq" element={<Faq />} />

        <Route path="/agency" element={<Agency />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/startup" element={<Startup />} />
        <Route path="/saas" element={<Saas />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/error" element={<Error />} />
        <Route path="/comingsoon" element={<Comingsoon />} />
        {/* <Route path="/auth-login" element={<Login />} />
        <Route path="/auth-signup" element={<Signup />} /> */}
        {/* <Route path="/auth-reset-password" element={<ResetPassword />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
