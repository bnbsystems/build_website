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
import ProductivityPage from './pages/feature/productivity';
import DowntimePage from './pages/feature/downtime';
import ScalabilityPage from './pages/feature/scalability';
import QualityPage from './pages/feature/quality';
import CollaborationPage from './pages/feature/collaboration';
import EfficiencyPage from './pages/feature/efficiency';
import AdvantagesPage from './pages/article/advantages';
import AutomationPage from './pages/article/automation';
import BuildRaportPage from './pages/article/build-raport';

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
        <Route path="/feature/productivity" element={<ProductivityPage />} />
        <Route path="/feature/reduced-downtime" element={<DowntimePage />} />
        <Route path="/feature/scalability" element={<ScalabilityPage />} />
        <Route path="/feature/quality" element={<QualityPage />} />
        <Route path="/feature/collaboration" element={<CollaborationPage />} />
        <Route path="/feature/cost-efficiency" element={<EfficiencyPage />} />
        <Route path="/blog/advantages" element={<AdvantagesPage />} />
        <Route path="/blog/automation" element={<AutomationPage />} />
        <Route path="/blog/build_raport" element={<BuildRaportPage />} />

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
