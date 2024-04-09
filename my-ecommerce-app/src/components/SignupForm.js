import React, { useState } from 'react';
import LoginForm from './LoginForm';

function SignupForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  function handleSignup(e) {
    e.preventDefault();
    if (username.trim() === '' ||
      password.trim() === '' ||
      confirmPassword.trim() === '' ||
      email.trim() === ''){
        setErrorMessage('Please fill in all fields.');
        
    } else {
      if (password !== confirmPassword) {
        setErrorMessage("Passwords do not match")
      } else {
        fetch('http://127.0.0.1:5000/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 'username': username, 'password': password, 'email': email }),
        })
        .then(response => {
          if (response.ok) {
            
            return response.json();
          } else {
            throw new Error('Registration failed');
          }
        })
        .then(data => setErrorMessage(data.message))
        .catch(error => setErrorMessage("An error occurred during signup. Please try again later."));
      }
    }
  }

  function gotoLoginForm() {
    setShowLogin(true); 
}

if (showLogin) {
    return <LoginForm />; 
}

  return (
    <div>
      <h1>Signup</h1>
      <p style={{ color: 'red' }}>{errorMessage}</p>
      <form onSubmit={handleSignup}>
        <span>Username:<input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /></span>
        <br />
        <span>Password:<input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /></span>
        <br />
        <span>Confirm Password:<input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        /></span>
        <br />
        <span>Email:<input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /></span>
        <br />
        <button type="submit">Signup</button>
        <br />
        <button onClick={gotoLoginForm}>Switch to Login</button>
      </form>
    </div>
  );
};

export default SignupForm;