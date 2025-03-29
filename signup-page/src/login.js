import React from 'react';
import '../src/styles/login.css';

function Login() {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <div className="remember-me">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="divider"><span>Or</span></div>
            <button className="socialButton">
                <i className="fab fa-google" style={{marginRight: '10px'}}></i>
                Login with Google
            </button>
      <p className="signup-prompt">
        Not a member? <a href="signup">Sign up now</a>
      </p>
    </div>
  );
}

export default Login;