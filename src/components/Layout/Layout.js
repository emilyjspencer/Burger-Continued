import React from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';

import aux from '../../hoc/aux';
import './Layout.css';

const Layout = (props) => {

    return (
        <aux>
        <div>
            <Toolbar />
        </div>
        <main className="content">{props.children}</main>
        </aux>
    )


}


export default Layout;