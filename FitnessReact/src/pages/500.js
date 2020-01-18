import React from 'react';
import '../styles/Errors.css';
import fatalErrorImg from '../images/500.png';

export default () => (
    <div className="text-center">
        <h1 className="Error_Text">Error: 500 Unexpected Error</h1>
        <img src={fatalErrorImg} alt="500 Unexpected Error" className="Error_Image"/>
    </div>
)