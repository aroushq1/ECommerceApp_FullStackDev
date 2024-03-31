import React, { useState } from 'react';
import Header from './Header';
import LoginForm from './LoginForm';
import Footer from './Footer';
import SignupForm from './SignupForm';

function LoginPage() {
    const [showSignup, setShowSignup] = useState(false);

    function switchToSignupClicked(){
        setShowSignup(true);
    }

    return (
        <div>
            <Header />
            <LoginForm />
            <Footer />
        </div>
    );
}

export default LoginPage;

