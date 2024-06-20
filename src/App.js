import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Signup from './pages/Signup'; 
import { Outlet } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <GoogleOAuthProvider clientId="153653751627-ekfrl8i33l5pctd36lg0bdgb04u6v9qc.apps.googleusercontent.com">
      <div className="App">
        <Outlet />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
