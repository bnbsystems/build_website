import i18next from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { navigate } from "gatsby";

export default function LanguagePicker() {
    const { i18n } = useTranslation();
    const currentUrl = window.location.href;
    const currentLanguage = i18next.language

    const changeLanguage = (e) => {
      i18n.changeLanguage(e.target.value);
      const urlLanguageSegment = `/${currentLanguage}/`
      if(currentUrl.endsWith(urlLanguageSegment)){
        navigate(currentUrl.replace(urlLanguageSegment, `/${e.target.value}/`))
      }
    };
  
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <select onChange={changeLanguage} value={i18n.language}>
          <option value="en">English</option>
          <option value="pl">Polski</option>
        </select>
      </div>
    );
  }
  
  