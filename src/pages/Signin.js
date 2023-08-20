import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
const Signin = () => {
  const [showPassword, setShowPasssword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [errorMessaage, setErrorMessage] = useState("")
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage("Please fill all fields")
      return;
    }
    setErrorMessage("")
    setSubmitButtonDisabled(true)
    signInWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        navigate('/movie')
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMessage(err.message);
      });
  };
  const togglePassword = () => {
    setShowPasssword(!showPassword)
  }
  return (
    <>
      <section style={{ backgroundImage: `url('./bg-img.jpg')` }} className='sign-in-sec b-bottom-primary'>
        <form className='signin-box' onSubmit={handleSubmit}>
          <h2>{t('sign_in')}</h2>
          <p className='text-danger f-13'>{errorMessaage}</p>
          <div className='mb-15'>
            <div className="input-container">
              <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
              <label className={email && 'filled'} >{t('email')}</label>
            </div>
          </div>
          <div className='mb-25'>
            <div className="input-container">
              <input type={showPassword ? "text" : "password"} value={password} onChange={(event) => setPassword(event.target.value)} />
              <label className={password && 'filled'} >{t('password')}</label>
              <button className='password-btn' onClick={togglePassword}>{showPassword ? `${t('hide')}` : `${t('show')}`}</button>
            </div>
          </div>
          <button className='btn-primary-signin' type='submit' disabled={submitButtonDisabled}>{t('sign_in')} <div className="lds-ring"></div></button>
          <div className='d-flex justify-content-between my-15 rememberAndHelp'>
            <div className='d-flex align-items-center'>
              <input type='checkbox' name='remember' id='rememberMe' />
              <label htmlFor='rememberMe'>{t('remember_me')}</label>
            </div>
            <div>
              <Link to="/forgotPassword">{t('need_help')}</Link>
            </div>
          </div>
          <div className='newToText'>{t('new_to_netflix')} <Link to="/signup">{t('signup_now')}</Link></div>
          <div className='learnDesc'><p>{t('this_page_desc')} <Link>{t('learn_more')}</Link></p></div>
        </form>
      </section>
    </>
  )
}

export default Signin