import i18next from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { navigate } from "gatsby";
import { useLocation  } from '@gatsbyjs/reach-router';
import formatLanguage from '../util/format-language';

export default function LanguagePicker() {
    const { i18n } = useTranslation();
    const location = useLocation()
    const currentUrl = location.pathname
    const currentLanguage = formatLanguage(i18next.language)

    const changeLanguage = (e) => {
      i18n.changeLanguage(e.target.value);
      const urlLanguageSegment = `/${currentLanguage}/`
      if(currentUrl.endsWith(urlLanguageSegment) && currentUrl !== undefined && currentUrl !== null && currentUrl !== '' ){
        navigate(currentUrl.replace(urlLanguageSegment, `/${e.target.value}/`))
      }
    };
  
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <select onChange={changeLanguage} value={formatLanguage(i18next.language)}>
          <option value="en">English</option>
          <option value="pl">Polski</option>
        </select>
      </div>
    );
  }
  
  