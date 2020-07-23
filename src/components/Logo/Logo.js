import React from 'react';
import Logo from '../../assets/Images/burger-logo.png'
import './Logo.css';

const logo = (props) => {
    return (
        <div className="Logo">
            <img src={Logo}/>
        </div>
    )
}




export default logo;