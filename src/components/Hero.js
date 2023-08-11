import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import Arrow from '../img/right-arrow.svg'
const Hero = () => {
  const [value, setValue] = useState('');
  const { t } = useTranslation();

  function handleChange(e) {
    setValue(e.target.value);
  }
  return (
    <>
      <section style={{ backgroundImage: `url('./bg-img.jpg')` }} className='hero-sec b-bottom-primary'>
        <h1>{t('hero_heading1')}</h1>
        <h4>{t('hero_heading2')}</h4>
        <p>{t('hero_heading3')}</p>
        <form className='search-bar'>
          <div className="input-container">
            <input type="text" onChange={handleChange} />
            <label className={value && 'filled'} >{t('email_address')}</label>
          </div>
          <button className='btn-primary-second'>{t('get_started')}
            <img src={Arrow} alt='right-arrow' className='r-arrow' /></button>
        </form>
      </section>
    </>
  )
}

export default Hero