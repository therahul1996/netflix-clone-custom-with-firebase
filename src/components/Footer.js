import React from 'react'
import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom';
import LanguageDropdown from './LanguageDropdown';
const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className='footer'>
      <div className='container'>
      <div className='row'>
          <div className='col-12'>
            <p className='call-text'>{t('question_text')} <Link>{t('call_number')}</Link></p>
          </div>
          <div className='col-4 mb-25 mb-mob-0'>
            <ul className='footer-links'>
              <li>
                <Link>{t('faq')}</Link>
              </li>
              <li>
                <Link>{t('media_center')}</Link>
              </li>
              <li>
                <Link>{t('ways_to_watc')}</Link>
              </li>
              <li>
                <Link>{t('cookie_preferences')}</Link>
              </li>
              <li>
                <Link>{t('speed_test')}</Link>
              </li>
            </ul>
          </div>
          <div className='col-4 mb-25 mb-mob-0'>
            <ul className='footer-links'>
              <li>
                <Link>{t('help_center')}</Link>
              </li>
              <li>
                <Link>{t('investor_relations')}</Link>
              </li>
              <li>
                <Link>{t('investor_relations')}</Link>
              </li>
              <li>
                <Link>{t('corporate_information')}</Link>
              </li>
              <li>
                <Link>{t('legat_notices')}</Link>
              </li>
            </ul>
          </div>
          <div className='col-4 mb-25'>
            <ul className='footer-links'>
            <li>
                <Link>{t('account')}</Link>
              </li>
              <li>
                <Link>{t('jobs')}</Link>
              </li>
              <li>
                <Link>{t('privacy')}</Link>
              </li>
              <li>
                <Link>{t('contact_US')}</Link>
              </li>
              <li>
                <Link>{t('contact_US')}</Link>
              </li>
            </ul>
          </div>
          <div className='col-12'>
          <LanguageDropdown />
          </div>
          <div className='col-12'>
            <p className='comp-text'>{t('netflix_india')}</p>
          </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer