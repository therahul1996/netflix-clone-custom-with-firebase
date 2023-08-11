import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../firebase'
const Signup = () => {
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passValue, setPassValue] = useState('');
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name:"",
    email:"",
    pass:"",
  })
  const [errorMessaage, setErrorMessage] = useState("")
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false)
  const handleSubmit = () => {
    // console.log(values)
    if(!values.name || !values.email || !values.pass) {
      setErrorMessage("Please fill all fields")
      return;
    }
   setErrorMessage("")
   setSubmitButtonDisabled(true)
   createUserWithEmailAndPassword(auth, values.email, values.pass)
   .then(async(res) => {
    setSubmitButtonDisabled(false);
   
    const user = res.user;
    await updateProfile(user, {
      displayName: values.name,
    });
    navigate('/signin')
   })
   .catch((err) => {
    setSubmitButtonDisabled(false);
    setErrorMessage(err.message); 
  });
  };
  return (
    <>
    <section style={{backgroundImage: `url('./bg-img.jpg')`}} className='sign-in-sec b-bottom-primary'>
        <div className='signin-box'>
            <h2>{t('sign_up')}</h2>
            <p className='text-danger f-13'>{errorMessaage}</p>
            <div className='mb-15'>
            <div className="input-container">
              <input type="text" onChange={(event) => { setValues((prev) => ({ ...prev, name: event.target.value })); setNameValue(event.target.value) }} />
              <label className={nameValue && 'filled'} >{t('name')}</label>
            </div>
            </div>
            <div className='mb-15'>
            <div className="input-container">
              <input type="email" onChange={(event) => { setValues((prev) => ({ ...prev, email: event.target.value })); setEmailValue(event.target.value) }} />
              <label className={emailValue && 'filled'} >{t('email')}</label>
            </div>
            </div>
            <div className='mb-25'>
            <div className="input-container">
              <input type="password" onChange={(event) => { setValues((prev) => ({ ...prev, pass: event.target.value })); setPassValue(event.target.value) }} />
              <label className={passValue && 'filled'} >{t('password')}</label>
            </div>
            </div>
            <button className='btn-primary-signin' onClick={handleSubmit} disabled={submitButtonDisabled}>{t('sign_up')} <div class="lds-ring"></div></button>
            <div className='newToText my-15'>{t('already_have_netflix')} <Link to="/signin">{t('sign_in_now')}</Link></div>
            <div className='learnDesc'><p>{t('this_page_desc')} <Link>{t('learn_more')}</Link></p></div>
        </div>
    </section>
    </>
  )
}

export default Signup