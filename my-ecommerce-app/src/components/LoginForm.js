import React, { useState } from 'react';
import SignupForm from './SignupForm';


function LoginForm(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showSignupForm, setShowSignupForm] = useState(false);

    function handleButtonClick() {
        setShowSignupForm(true);
    }

    if (showSignupForm) {
        return <SignupForm />;
    }
    
    function fieldsNotEmpty(event){
        event.preventDefault();
        if (password === '' || username ===''){
            setError('All Fields are Required')
            return;
        }
    }

    return(
        <div>
            <h1>Login</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={fieldsNotEmpty}>
                <label htmlFor= "username">Username: </label>
                <input type= "text" id= "username" name="password" placeholder="Enter your username" onChange={(e) => setUsername(e.target.value)} /><br />

                <label htmlFor= "password">Password: </label>
                <input type= "password" id= "password" name= "password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} /><br />

                <button>Login</button><br />
                <button onClick={handleButtonClick}>Switch to Signup</button>
            </form>
        </div>
        
    );
}

export default LoginForm;
