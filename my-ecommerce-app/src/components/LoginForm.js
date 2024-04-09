import React, {useState, useEffect} from 'react';
import SignupForm from './SignupForm.js';
import {useNavigate} from 'react-router-dom';
import { useAuthContext } from '../App.js';

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [authMessage, setAuthMessage] = useState("");
    const [showSignup, setShowSignup] = useState(false);
    const {authenticated, setAuthenticated} = useAuthContext();
    const [isInitialRender, setIsInitialRender] = useState(true);

    const navigate = useNavigate();

    useEffect(()=> {
        if (isInitialRender){
            setIsInitialRender(false)
        }
        else if (authenticated){
            navigate(`/products`);
        }
    },[authenticated])
    
    function handleAuthenication() {
        if (!username || !password) {
            setAuthMessage("All fields required");
        }
        else{
            fetch('http://127.0.0.1:5000/login',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({'username':username, 'password':password}),
            })
            .then(response => {
                if (response.ok) {
                    navigate(`/products`)
                  return response.json();
                } else {
                    throw new Error('Authentication failed');
                }
            })
            .then(data => {setAuthMessage(data.authMessage); setAuthenticated(data.authenticated);})
            .catch(error => setAuthMessage(error));
    }console.log(authMessage)
    };

    function gotoSignupForm() {
        setShowSignup(true); 
    }

    if (showSignup) {
        return <SignupForm />; 
    }

    return (
        <div>
            <h1>Login</h1>
            <p style={{ color: "red" }}>{authMessage}</p>

            <label>Username: </label>
            <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                placeholder='Enter your username'
            />
            <br />

            <label>Password: </label>
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter your password'
            />
            <br />

            <button onClick={handleAuthenication}>Login</button> <br />
            <button onClick={gotoSignupForm}>Switch to Signup</button>
        </div>
    );
};

export default LoginForm;