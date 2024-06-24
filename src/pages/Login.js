import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'; 
import pawsaathiLogo from './pawsaathi.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('All fields are required');
      return;
    }
    try {
      const userCredentials = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredentials);
      const user = userCredentials.user;
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      navigate("/");
    } catch (error) {
      console.error(error);
      setError('Failed to log in. Please check your credentials.');
    }
  }

  return (
    <div className="body">
      <div className="login-container">
        <div className="logo">
          <img src={pawsaathiLogo} alt="Pawsaathi" />
          <h2>pawsaathi</h2>
        </div>
        <h4>Login Page</h4>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit} className='Login-form'>
          <input 
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
          <input 
            type="password"
            placeholder="Your Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
          <button type='submit' className='login-button'>Login</button>
        </form>
        <p>Need to SignUp? <span className='signup'><Link to="/signup">Create Account</Link></span></p>
      </div>
    </div>
  );
}

export default Login;
