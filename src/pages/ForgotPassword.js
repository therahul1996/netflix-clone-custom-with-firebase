import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import { auth } from '../firebase'
import { sendPasswordResetEmail } from 'firebase/auth'
const ForgotPassword = () => {
  const [value, setValue] = useState('');
  const { t } = useTranslation();
  const [values, setValues] = useState({
    email:"",
    pass:"",
  })
  const [errorMessaage, setErrorMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false)
  const handleSubmit = (event) => {
    if(!values.email) {
      setErrorMessage("Please Enter fields")
      return;
    }
   setErrorMessage("")
   setSubmitButtonDisabled(true)
   sendPasswordResetEmail(auth, values.email)
   .then(async(res) => {
    setSubmitButtonDisabled(false);
    setSuccessMessage("Please Check your Email")
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
          <div className='newToText mb-25'>{t('forgot_desc')}</div>
          <p className='text-danger f-13'>{errorMessaage}</p>
          <p className='text-success f-13'>{successMessage}</p>
            <div className='mb-25'>
              <div className="input-container">
                <input type="email" onChange={(event) => {setValues((prev) => ({...prev, email: event.target.value})); setValue(event.target.value)}} />
                <label className={value && 'filled'} >{t('enter_your_email_address')}</label>
              </div>
            </div>
            <button className='btn-primary-signin mb-15' onClick={handleSubmit}  disabled={submitButtonDisabled}>{t('forgot_password')} <div class="lds-ring"></div></button>
            <div className='newToText'>{t('already_have_netflix')} <Link to="/signin">{t('sign_in_now')}</Link></div>
            <div className='learnDesc'><p>{t('this_page_desc')} <Link>{t('learn_more')}</Link></p></div>
        </div>
    </section>
    </>
  )
}

export default ForgotPassword