import React from 'react';
import '../styles/Errors.css';
import fatalErrorImg from '../images/500.png';

export default () => (
    <div className="text-center">
        <h1 className="Error_Text">Error: 404 Page Not Found</h1>
        <img src={fatalErrorImg} alt="404 Not Found" className="Error_Image"/>
    </div>
)