/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import "../assets/css/materialdesignicons.min.css";
import "../assets/scss/themes.scss";
import Navbar from "./navbar";
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';
import Footer from "./footer";
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {

  return (
    <div>
      <Helmet>
           <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" />
      </Helmet>
      <I18nextProvider i18n={i18n}>
        <Navbar/>
        <div>
          {children}
        </div>
        <Footer/>
      </I18nextProvider> 
    </div>
  )
}

export default Layout
