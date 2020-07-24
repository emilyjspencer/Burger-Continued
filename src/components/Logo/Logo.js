import React from 'react';
import Logo from '../../assets/Images/burger-logo.png'
import styles from './Logo.module.css';

const logo = (props) => {
    return (
        <div className={styles.Logo}>
            <img src={Logo} alt="burgerlogo" style={{ heigh: props.height }}/>
        </div>
    )
}




export default logo;