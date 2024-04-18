import React from 'react';
import './App.css';
import NewUser from './NewUser';
// LoginScreen
function LoginScreen({ onNavigate }) {

    return (
        <div className="LoginScreen">

            <header className="header">
                <h1>Login</h1>
                <input type="text" placeholder="Username" className="signup" />
                <input type="text" placeholder="Password" className="signup" />
                <button onClick={() => onNavigate('Login')} className="orange-button">Login</button>
                <p className="clickable-text" onClick={() => onNavigate('NewUser')}>Don't have an account? Sign up now</p>
                <button onClick={() => onNavigate('Screens')} className="orange-button">Back</button>

            </header>
        </div>
    );
}

export default LoginScreen;
