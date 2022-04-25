import React from 'react';
import LoginForm from './LoginForm';
import '../../styles/login.css';

const image = 'image/loginImage.svg'
const logo = 'image/logo_dark.svg'

// Removed styled, LoginImage and mobileMaxWidth

const LoginWrapper = () => {

    return (
        <div className="login-page">
            <div className="box image">
                <img src={logo} className="landing-logo" />
                <img src={image} className="landing-img" />
            </div>
            <div className="box login-form"><LoginForm /></div>
        </div>
    )

}

export default LoginWrapper;
