import React from 'react';
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';
// import { faGoogle } from '@fontawesome/free-brands-svg-icons';
import './styles/signup.css'; // Import the CSS file

function SignUp() {
  return (
    <div className="container">
      
      <form className="form">
      <h2>Sign Up</h2>
        <input type="text" placeholder="Name" className="input" />
        <input type="password" placeholder="Password" className="input" />
        <input type="email" placeholder="Email" className="input" />
        <button type="submit" className="button">Sign Up</button>

        <p className="login-link">Already have an account? <a href="/login">Log in</a></p>
            <div className="divider">
                <span>Or</span>
            </div>
            <button className="socialButton">
                <i className="fab fa-google" style={{marginRight: '10px'}}></i>
                Sign up with Google
            </button>
      </form>
      
      
      
    </div>
  );
}

export default SignUp;