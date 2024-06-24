import React, { useState, useEffect } from 'react';
import './Signup2.css'; 
import pawsaathiLogo from './pawsaathi.png';

const Signup2 = () => {
  const [otp, setOtp] = useState(new Array(4).fill(''));
  const [timer, setTimer] = useState(120);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [resendEnabled, setResendEnabled] = useState(false);
  const phoneNumber = '+91 9892 0XXXXX';

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer(prev => {
        if (prev > 0) {
          return prev - 1;
        } else {
          clearInterval(countdown);
          setResendEnabled(true);
          return 0;
        }
      });
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  const handleOtpChange = (element, index) => {
    if (isNaN(element.value)) return;
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.nextSibling && element.value) {
      element.nextSibling.focus();
    }
  };

  const handleRoleChange = (role) => {
    setSelectedRoles(prev =>
      prev.includes(role) ? prev.filter(r => r !== role) : [...prev, role]
    );
  };

  const handleSubmit = () => {
    console.log('OTP:', otp.join(''));
    console.log('Selected Roles:', selectedRoles);
    // Handle OTP submission
  };

  const handleResend = () => {
    setTimer(120);
    setResendEnabled(false);
    console.log('Resending OTP');
    // Handle OTP resend logic
  };

  return (
    <div className='body'>
      <div className="signup-container">
        <div className="logo">
          <img src={pawsaathiLogo} alt="Pawsaathi" />
          <h2>pawsaathi</h2>
        </div>  
        <h5>Confirm your Phone Number</h5>
        <p>Enter the OTP sent to you by SMS at <strong>{phoneNumber}</strong></p>
        <div className="otp-container">
          {otp.map((data, index) => (
            <input
              className="otp-field"
              type="text"
              name="otp"
              maxLength="1"
              key={index}
              value={data}
              onChange={(e) => handleOtpChange(e.target, index)}
              onFocus={(e) => e.target.select()}
            />
          ))}
        </div>
        <div className='timer'><p><b>Remaining Time : {timer}</b></p></div>
        <div className="roles">
          <p><b>I am a</b></p>
          <div className="checkboxes">
            {['Pet Parent', 'Pet Boarder', 'Pet Sitter', 'Groomer', 'Pet Lover', 'Pet Walker', 'Vet Doctor', 'Trainer'].map((role) => (
              <label
                key={role}
                className={selectedRoles.includes(role) ? 'selected' : ''}
                onClick={() => handleRoleChange(role)}
              >
                <input
                  type="checkbox"
                  value={role}
                  checked={selectedRoles.includes(role)}
                  onChange={() => handleRoleChange(role)}
                />
                {role}
              </label>
            ))}
          </div>
        </div>
        <button onClick={handleSubmit} className="submit-button">Submit</button>
        <div className='resend'><p>
          Haven't received an SMS <span className={resendEnabled ? "resend red" : "resend"} onClick={handleResend}>Resend</span>
        </p></div>
      </div>
    </div>
  );
};

export default Signup2;
