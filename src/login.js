import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { useNavigate } from 'react-router-dom';
import "./login.css"; 

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logged in with Email: ${email}`);
     navigate('/dashboard');
  };

  return (
    <div className="top">
    <div className="login-page">
    <div className="login-container">
      <h2 div className="h2-log">Login</h2>
      <form onSubmit={handleLogin}>
        <input div className="input-log"
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
          <input div className="input-log"
          type="password" 
          placeholder="Passcode" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button className="log-btn" type="submit">Login</button>
      </form>
      <p div className="p-log">Don't have an account?👉🏻 <Link className="sign-up-link" to="/signup">Sign up</Link></p>
    </div>
    </div>
    </div>
  );
}

export default Login;
