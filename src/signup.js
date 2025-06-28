import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./signup.css"; 

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    alert(`Signed up successfully!\nName: ${name}\nEmail: ${email}`);
  };

  return (
    <div className="noun">
    <div className="signup-page">
    <div className="login-container">
      <h2 div className="h2-sign">Signup</h2>
      <form onSubmit={handleSignup}>
        <input div className="input-sign"
          type="text" 
          placeholder="Full Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <input div className="input-sign"
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input div className="input-sign"
          type="password" 
          placeholder="Passcode" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button div className="button-sign" type="submit">Sign Up</button>
      </form>
      <p div className="p-sign">Already have an account?👉🏻 <Link className="login-link" to="/">Login</Link></p>
    </div>
    </div>
    </div>

  );
}

export default Signup;
