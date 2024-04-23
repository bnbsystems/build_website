import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguagePicker() {
    const { i18n } = useTranslation();
  
    const changeLanguage = (e) => {
      i18n.changeLanguage(e.target.value);
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
  
  