import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext("en");

function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  const switchLang = () => {
    setLang((prevLang) => (prevLang === "en" ? "ko" : "en"));
  };

  const handleChange = (event) => {
    setLang(event.target.value);
  };

  return (
    <LanguageContext.Provider value={{ lang, switchLang, handleChange }}>
      {children}
    </LanguageContext.Provider>
  );
}

function SelectLang() {
  const { lang, handleChange } = useContext(LanguageContext);

  return (
    <select onChange={handleChange}>
      <option value="en">English</option>
      <option value="ko">한국어</option>
    </select>
  );
}

function SayHello() {
  const { lang, handleChange } = useContext(LanguageContext);

  return <p>{lang === "en" ? "Hello" : "안녕하세요"}</p>;
}

function Language() {
  return (
    <LanguageProvider>
      <SelectLang />
      <SayHello />
    </LanguageProvider>
  );
}

export default Language;
