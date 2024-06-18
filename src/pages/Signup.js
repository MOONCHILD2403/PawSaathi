import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import {auth} from '../firebase'
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
const Signup = () => {
   
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      const userCredentials = await createUserWithEmailAndPassword(auth,email,password)
      console.log(userCredentials)
      const user = userCredentials.user;
      localStorage.setItem('token',user.accessToken);
      localStorage.setItem('user',JSON.stringify(user));
      navigate("/");

    } catch (error) {
      console.error(error);
      
    }
  }

  return (
    <><meta name="google-signin-client_id" content="153653751627-ekfrl8i33l5pctd36lg0bdgb04u6v9qc.apps.googleusercontent.com"></meta><div className='signup-page'>
      <h1>Signup Page</h1>
      <div className='form-outline'>
        <form onSubmit={handleSubmit} className='Signup-form'>
          <input
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)} />

          <input
            type="password"
            placeholder="Your Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
          <button type='submit' className='signup-button'> Signup </button>
        </form>
        <div className = 'google_login'>
          <GoogleLogin                                              //google login function
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />;
        </div>
        <p>Already Registered? <Link to="/login">Login</Link></p>
      </div>
    </div></>
  )
}

export default Signup