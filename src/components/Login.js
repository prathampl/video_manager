import React, { useState } from 'react';
import { sendOtp, verifyOtp } from '../services/api';

function Login() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleSendOtp = async () => {
    try {
      await sendOtp(email);
      setIsOtpSent(true);
      alert('OTP Sent Successfully');
    } catch (error) {
      console.error('Error Sending OTP:', error);
      alert('Failed to send OTP');
    }
  };

  const handleVerifyOtp = async () => {
    try {
      await verifyOtp(email, otp);
      alert('Login Successful');
      window.location.href = '/import';
    } catch (error) {
      console.error('Error Verifying OTP:', error);
      alert('Invalid OTP');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {isOtpSent && (
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
      )}
      <button onClick={isOtpSent ? handleVerifyOtp : handleSendOtp}>
        {isOtpSent ? 'Verify OTP' : 'Send OTP'}
      </button>
    </div>
  );
}

export default Login;
