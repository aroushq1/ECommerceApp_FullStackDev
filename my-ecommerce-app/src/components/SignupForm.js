import React, { useState } from 'react';
import LoginForm from './LoginForm';

function SignupForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [showLoginForm, setShowLoginForm] = useState(false);

    function handleButtonClick(){
        setShowLoginForm(true)
    };

    if (showLoginForm) {
        return <LoginForm />;
    }

    function handleSubmit(event){
        event.preventDefault();
        
        if (!username || !email || !password || !confirmPassword) {
            setError('All fields are required!');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        // Reset error message
        setError('');

    };

    return (
        <div>
            <h1>Signup</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username" /><br />

                <label htmlFor="password">Password: </label>
                <input type="password" id="password"  onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" /><br />

                <label htmlFor="confirmPassword">Confirm Password: </label>
                <input type="password" id="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm your password" /><br />

                <label htmlFor="email">Email: </label>
                <input type="email" id="email" onChange={(e) => setEmail(e.target.value)}  placeholder="Enter your email" /><br />

                <button type="submit">Submit</button><br />
                <button onClick={handleButtonClick}>Switch to Login</button>
            </form>
        </div>
    );
}

export default SignupForm;
