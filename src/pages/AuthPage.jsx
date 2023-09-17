import React from 'react';
import LogInForm from '../components/LogInForm/LogInForm';
import SignUpForm from '../components/SignUpForm/SignUpForm'; 
import logo from '../images/gatoLocal2.png'


export default function AuthPage({ setUser }) {
  return (
      <div className="auth-container"> 
      <h1 className="logo-container">
        <img src={logo} alt='logo' className='logo' />
      </h1>
      <div className="sign-up"> 
        <h2>Sign Up</h2>
        <SignUpForm setUser={setUser} />
      </div>
      <div className="sign-in"> 
        <h2>Log In</h2>
        <LogInForm setUser={setUser} />
      </div>
    </div>
  );
}


