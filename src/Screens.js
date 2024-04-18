import './App.css';
import React from 'react';
import LoginScreen from './Login';

// Initial Screen with 
function Screens({ onNavigate }) {
    
return (
    <div className="Screens">
        <header className="header">

            <h1>Cravosity</h1>
            <button onClick={() => onNavigate('LoginScreen')} className="orange-button">Existing User</button>
            <button onClick={() => onNavigate('NewUser')} className="orange-button">Create Account</button>
            <p className="clickable-text" onClick={() => onNavigate('LoginScreen')}>Continue as Guest</p>
        </header>
    </div>
);
}

export default Screens;

