import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../firebase'
const Signup = () => {
  const [showPassword, setShowPasssword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [errorMessaage, setErrorMessage] = useState("")
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !email || !password) {
      setErrorMessage("Please fill all fields")
      return;
    }
   setErrorMessage("")
   setSubmitButtonDisabled(true)
   createUserWithEmailAndPassword(auth, email, password)
   .then(async(res) => {
    setSubmitButtonDisabled(false);
   
    const user = res.user;
    await updateProfile(user, {
      displayName: name,
    });
    navigate('/signin')
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
    <section style={{backgroundImage: `url('./bg-img.jpg')`}} className='sign-in-sec b-bottom-primary'>
        <form className='signin-box' onSubmit={handleSubmit}>
            <h2>{t('sign_up')}</h2>
            <p className='text-danger f-13'>{errorMessaage}</p>
            <div className='mb-15'>
            <div className="input-container">
              <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
              <label className={name && 'filled'} >{t('name')}</label>
            </div>
            </div>
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
              <div className='password-btn' onClick={togglePassword}>{showPassword ? `${t('hide')}` : `${t('show')}`}</div>
            </div>
            </div>
            <button className='btn-primary-signin' type='submit' disabled={submitButtonDisabled}>{t('sign_up')} <div className="lds-ring"></div></button>
            <div className='newToText my-15'>{t('already_have_netflix')} <Link to="/signin">{t('sign_in_now')}</Link></div>
            <div className='learnDesc'><p>{t('this_page_desc')} <Link>{t('learn_more')}</Link></p></div>
        </form>
    </section>
    </>
  )
}

export default Signup