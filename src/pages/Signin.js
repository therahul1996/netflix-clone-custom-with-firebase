import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
const Signin = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  })
  const [errorMessaage, setErrorMessage] = useState("")
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false)
  const handleSubmit = () => {
    // console.log(values)
    if (!values.email || !values.pass) {
      setErrorMessage("Please fill all fields")
      return;
    }
    setErrorMessage("")
    setSubmitButtonDisabled(true)
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        // const user = res.user;
        // await updateProfile(user, {
        //   displayName: values.name,
        // });
        navigate('/movie')
        
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMessage(err.message);
      });
  };
  return (
    <>
      <section style={{ backgroundImage: `url('./bg-img.jpg')` }} className='sign-in-sec b-bottom-primary'>
        <div className='signin-box'>
          <h2>{t('sign_in')}</h2>
          <p className='text-danger f-13'>{errorMessaage}</p>
          <div className='mb-15'>
            <div className="input-container">
              <input type="email" onChange={(event) => { setValues((prev) => ({ ...prev, email: event.target.value })); setEmailValue(event.target.value) }} />
              <label className={emailValue && 'filled'} >{t('email')}</label>
            </div>
          </div>
          <div className='mb-25'>
            <div className="input-container">
              <input type="password" onChange={(event) => { setValues((prev) => ({ ...prev, pass: event.target.value })); setPasswordValue(event.target.value) }} />
              <label className={passwordValue && 'filled'} >{t('password')}</label>
            </div>
          </div>
          <button className='btn-primary-signin' onClick={handleSubmit} disabled={submitButtonDisabled}>{t('sign_in')} <div class="lds-ring"></div></button>
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
        </div>
      </section>
    </>
  )
}

export default Signin