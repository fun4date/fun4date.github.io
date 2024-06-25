"use client";

import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const lngs = {
    en: { 
        nativeName: 'English' ,
        abbreviation: 'EN'
    },
    es: { 
        nativeName: 'Spanish',
        abbreviation: 'ES' }
  };


export default function LangSwitcher() {
    const { i18n } = useTranslation();
    return ( 
        <div className='lang_switcher'>
            <div>
            <FontAwesomeIcon className="icon"  icon={faGlobe} />
        {Object.keys(lngs).map((lng) => (
            <a
            key={lng}
            style={{
                fontWeight: i18n.language === lng ? '800' : '200', 
            }}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
            >
            
            {lngs[lng].abbreviation}   <span style={{display: lng === "en" ? 'inline' : 'none', fontWeight: 'normal' }}> / </span> 
            
            </a>
        ))}</div>
        </div>
    );
}