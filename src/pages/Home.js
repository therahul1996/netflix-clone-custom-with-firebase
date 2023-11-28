import React, {useState} from 'react'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero'
import Arrow from '../img/right-arrow.svg'
import Screen1 from '../img/screen-1.png'
import Screen2 from '../img/screen-2.jpg'
import Screen3 from '../img/screen-3.png'
import Screen4 from '../img/screen-4.png'
import ScreenBg1 from '../img/screen-bg-1.m4v'
import ScreenBg3 from '../img/screen-bg-3.m4v'
import contentBoxImg from '../img/c-box-img.png'
import downloadIcon from '../img/download-icon.gif'
import Accordion from '../components/Accordion' 
const Home = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  function handleChange(e) {
    setEmail(e.target.value);
  }
  const { t, ready } = useTranslation();
  if (!ready) return "loading translations...";
  const accordionData = t("accordionData", { returnObjects: true });
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!email) {
      return;
    }
    navigate(`/signup?email=${encodeURIComponent(email)}`);
  };
  return (
    <>
      <Hero />
      <section className='section left-content-sec b-bottom-primary'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-6'>
              <h1>{t('homeSecction.heading1')}</h1>
              <p>{t('homeSecction.paragraph1')}</p>
            </div>
            <div className='col-6'>
              <div className='lc-screen-sec' >
                <img src={Screen1} alt='Screen1' className='l-screen-img' />
                {/* <video src={ScreenBg1} autoplay='true' loop='true' /> */}
                <video
                  src={ScreenBg1}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section left-content-sec b-bottom-primary'>
        <div className='container'>
          <div className='row align-items-center flex-row-reverse'>
            <div className='col-6'>
              <h1>{t('homeSecction.heading2')}</h1>
              <p>{t('homeSecction.paragraph2')}</p>
            </div>
            <div className='col-6'>
              <div className='lc-screen-sec' >
                <img src={Screen2} alt='Screen2' className='l-screen-img' />
                <div className='contentBox'>
                    <div>
                      <img src={contentBoxImg} alt='brands' className='imgOne' />
                    </div>
                    <div className='content-text-sec'>
                      <h3>Stranger Things</h3>
                      <p>Downloading...</p>
                    </div>
                    <div>
                      <img src={downloadIcon} alt='download-icon' className='imgTwo' />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section left-content-sec b-bottom-primary'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-6'>
              <h1>{t('homeSecction.heading3')}</h1>
              <p>{t('homeSecction.paragraph3')}</p>
            </div>
            <div className='col-6'>
              <div className='lc-screen-sec' >
                <img src={Screen3} alt='Screen3' className='l-screen-img' />
                {/* <video src={ScreenBg1} autoplay='true' loop='true' /> */}
                <video
                  src={ScreenBg3}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls={true}
                  className='third'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section left-content-sec b-bottom-primary'>
        <div className='container'>
          <div className='row align-items-center flex-row-reverse'>
            <div className='col-6'>
              <h1>{t('homeSecction.heading4')}</h1>
              <p>{t('homeSecction.paragraph4')}</p>
            </div>
            <div className='col-6'>
              <div className='lc-screen-sec' >
                <img src={Screen4} alt='Screen4' className='l-screen-img' />
                {/* <video src={ScreenBg1} autoplay='true' loop='true' /> */}
                <video
                  src={ScreenBg1}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section b-bottom-primary faq'>
        <div className='container'>
          <h1>{t('accordion_heading')}</h1>
          {accordionData.map(({id, title, content}) => {
            return(
              <Accordion key={id} title={title} content={content} />
            )
          })}
           <p>{t('hero_heading3')}</p>
        <form className='search-bar' onSubmit={handleSubmit}>
            <div className="input-container">
                <input type="email" value={email} onChange={handleChange} />
                <label className={email && 'filled'} >{t('email_address')}</label>
              </div>
            <button className='btn-primary-second' type='submit'>{t('get_started')}
            <img src={Arrow} alt='right-arrow' className='r-arrow' /></button>
        </form>
        </div>
      </section>
    </>
  )
}

export default Home