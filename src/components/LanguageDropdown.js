import React, {useState} from 'react'
import { useTranslation} from 'react-i18next';
import { MdLanguage } from "react-icons/md";
const LanguageDropdown = () => {
  const [lang , setLang] = useState('en')

    const languages = [
        { code: "en", title: "English" },
        { code: "hn", title: "Hindi" },
      ];
      const { i18n } = useTranslation();
      const handleChange = (event) => {
        i18n.changeLanguage(event.target.value);
        setLang(event.target.value)
      }
  return (
    <div className='language-dropdown'>
    <MdLanguage className='ld-icon'  />
    <select className="language-select" onChange={handleChange} value={lang}>
        {languages.map((language) => (
        <option key={language.code} value={language.code}>
            {language.title}
        </option>
        ))}
    </select>
    </div>
  )
}

export default LanguageDropdown