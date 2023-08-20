import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import Arrow from '../img/right-arrow.svg'
import { useNavigate } from 'react-router-dom';
const Hero = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const { t } = useTranslation();

  function handleChange(e) {
    setEmail(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!email) {
      return;
    }
    navigate(`/signup`);
  };
  return (
    <>
      <section style={{ backgroundImage: `url('./bg-img.jpg')` }} className='hero-sec b-bottom-primary'>
        <h1>{t('hero_heading1')}</h1>
        <h4>{t('hero_heading2')}</h4>
        <p>{t('hero_heading3')}</p>
        <form className='search-bar' onSubmit={handleSubmit}>
          <div className="input-container">
            <input type="email" value={email} onChange={handleChange} />
            <label className={email && 'filled'} >{t('email_address')}</label>
          </div>
          <button className='btn-primary-second' type='submit'>{t('get_started')}
            <img src={Arrow} alt='right-arrow' className='r-arrow' /></button>
        </form>
      </section>
    </>
  )
}

export default Hero