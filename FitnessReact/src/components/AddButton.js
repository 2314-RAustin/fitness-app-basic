import React from 'react';
import '../styles/AddButton.css';
import buttomImg from '../images/add.png';
import { Link } from 'react-router-dom';

export default () => (
    <Link to="/exercice/new">
        <img src={buttomImg} className="Fitness-Add" alt="exercise"/>
    </Link>
)