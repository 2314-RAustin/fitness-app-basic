import React from 'react';
import '../styles/Welcome.css';

export default ({userName}) => (
    <div className="container">
        <div className="Fitness-User-Info">
            <h1>Hello {userName}!</h1>
            <p>Lets workout to get someone gains!</p>
        </div>
    </div>
);