import React from 'react';
import '../styles/Errors.css';
import notFoundImg from '../images/404.png';

export default () => (
    <div className="text-center">
        <h1 className="Error_Text">Error: 500 Unexpected Error</h1>
        <img src={notFoundImg} alt="500 Unexpected Error" className="Error_Image"/>
    </div>
)