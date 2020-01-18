import React from 'react';
import '../styles/Errors.css';
import notFoundImg from '../images/404.png';

export default () => (
    <div className="text-center">
        <h1 className="Error_Text">Error: 404 Page Not Found</h1>
        <img src={notFoundImg} alt="Error: 404 Page Not Found<" className="Error_Image"/>
    </div>
)