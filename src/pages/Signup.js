import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF, FaApple } from 'react-icons/fa';
import './Signup.css'; 
import pawsaathiLogo from './pawsaathi.png';


const Signup = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const handleNameChange = (e) => setName(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleGenerateOTP = () => {
    // Handle OTP generation
    console.log('Generating OTP for', name, phone);
  };

  const handleSocialLogin = (platform) => {
    // Handle social login
    console.log(`Logging in with ${platform}`);
  };

  return (
    <div className='body'>
      <div className="signup-container">
        <div className="logo">
          <img src={pawsaathiLogo} alt="Pawsaathi" />
          <h2>pawsaathi</h2>
        </div>  
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
          className="input-field"
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          className="input-field"
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
          className="input-field"
        />
        <input
          type="tel"
          placeholder="+91 98925XXXXX"
          value={phone}
          onChange={handlePhoneChange}
          className="input-field"
        />
        
        <button onClick={handleGenerateOTP} className="otp-button">Generate OTP</button>
        <div className="divider">or continue with</div>
        <div className="social-login">
          <button onClick={() => handleSocialLogin('Facebook')} className="social-button facebook">
            <FaFacebookF className="social-icon" />
          </button>
          <button onClick={() => handleSocialLogin('Google')} className="social-button google">
            <FcGoogle className="social-icon" />
          </button>
          <button onClick={() => handleSocialLogin('Apple')} className="social-button apple">
            <FaApple className="social-icon" />
          </button>
        </div>
        <div className="footer">
          <button className="skip-button">I'll do it later</button>
          <p>Already have an account? <Link to="/signin">Sign in</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
