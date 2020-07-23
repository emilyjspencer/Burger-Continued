import React from 'react';
import Logo from '../../Logo/Logo';

import './Toolbar.css'

const toolbar = (props) => {

    return (
        <header className="Toolbar">
            <div>MENU</div>
            <Logo />
            <nav>
                links
            </nav>
        </header>
    )

}


export default toolbar;