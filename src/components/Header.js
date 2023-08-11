import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom'
import LanguageDropdown from './LanguageDropdown'
import { auth } from '../firebase'
import { signOut } from "firebase/auth";
const Header = (props) => {
    const navigate = useNavigate();
    const signOutButton = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/signin')
        }).catch((error) => {
            // An error happened.
        });
    }
    const { t } = useTranslation();

    return (
        <header className='navbar container'>
            <ul className='nav-left'>
                <li>
                    <Link to="/">
                        <img src='./logo.png' alt='logo' className='logo' />
                    </Link>
                </li>
            </ul>
            <ul className='nav-right'>
                <li>
                    <LanguageDropdown />
                </li>
                <li>
                    {props.isLogin ? <button onClick={signOutButton} className='btn-primary' >{t('sign_out')}</button> : <Link to="/signin" className='btn-primary' >{t('sign_in')}</Link>}
                </li>
            </ul>
        </header>
    )
}

export default Header