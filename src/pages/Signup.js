import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import {auth} from '../firebase'
import { Link, useNavigate } from 'react-router-dom';
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
    <div className='signup-page'>
      <h1>Signup Page</h1>
      <div className='form-outline'>
    <form onSubmit={handleSubmit} className='Signup-form'>
     <input 
     type = "email"
     placeholder = "Your Email"
     required
     value={email}
     onChange={(e) => setEmail(e.target.value)}
     />
     
     <input 
     type = "password"
     placeholder = "Your Password"
     required
     value={password}
     onChange={(e) => setPassword(e.target.value)}
     />
     <button type='submit' className='signup-button'> Signup </button>
    </form>
    <p>Already Registered? <Link to="/login">Login</Link></p>
    </div>
    </div>
  )
}

export default Signup