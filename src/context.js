import React, { useState, useEffect } from 'react';

// Translations
import polish from './translations/pl.json';
import english from './translations/en.json';

export const LanguageContext = React.createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pl');
  const [dictionary, setDictionary] = useState(polish);

  useEffect(() => {
    if (localStorage.getItem('language')) {
      setLanguage(localStorage.getItem('language'));
    }
  }, []);

  useEffect(() => {
    if (language === 'pl') {
      setDictionary(polish);
      document.title = polish.title;
    } else if (language === 'en') {
      setDictionary(english);
      document.title = english.title;
    } else {
      setDictionary(english);
      document.title = english.title;
    }
  }, [language]);

  const changeLanguage = (e) => {
    e.preventDefault();
    setLanguage(e.target.dataset.language);
    localStorage.setItem('language', e.target.dataset.language);
  };

  return (
    <LanguageContext.Provider
      value={{
        language: language,
        changeLanguage: changeLanguage,
        dictionary: dictionary,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
