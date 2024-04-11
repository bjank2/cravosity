import './App.css';
import React from 'react';

// Initial Screen with 
function Screens({ onNavigate }) {
    
return (
    <div className="Screens">
        <header className="Screens-header">
            <h1>Cravosity</h1>
            <button onClick={() => onNavigate('second')} className="orange-button">Existing User</button>
            <button onClick={() => onNavigate('Signup.html')} className="orange-button">Create Account</button>
            <p className="clickable-text" onClick={() => onNavigate('Signup.html')}>Continue as Guest</p>
        </header>
    </div>
);
}

export default Screens;




