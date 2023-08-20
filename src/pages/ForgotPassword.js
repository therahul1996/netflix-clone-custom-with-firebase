import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import { auth } from '../firebase'
import { sendPasswordResetEmail } from 'firebase/auth'
const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const { t } = useTranslation();
  const [errorMessaage, setErrorMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!email) {
      setErrorMessage("Please Enter fields")
      return;
    }
   setErrorMessage("")
   setSubmitButtonDisabled(true)
   sendPasswordResetEmail(auth, email)
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
        <form className='signin-box' onSubmit={handleSubmit}>
          <div className='newToText mb-25'>{t('forgot_desc')}</div>
          <p className='text-danger f-13'>{errorMessaage}</p>
          <p className='text-success f-13'>{successMessage}</p>
            <div className='mb-25'>
              <div className="input-container">
                <input type="email" onChange={(event) => setEmail(event.target.value)} />
                <label className={email && 'filled'} >{t('enter_your_email_address')}</label>
              </div>
            </div>
            <button className='btn-primary-signin mb-15' type='submit' disabled={submitButtonDisabled}>{t('forgot_password')} <div className="lds-ring"></div></button>
            <div className='newToText'>{t('already_have_netflix')} <Link to="/signin">{t('sign_in_now')}</Link></div>
            <div className='learnDesc'><p>{t('this_page_desc')} <Link>{t('learn_more')}</Link></p></div>
        </form>
    </section>
    </>
  )
}

export default ForgotPassword