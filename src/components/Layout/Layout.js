import React from 'react';

import aux from '../../hoc/aux';
import './Layout.css';

const Layout = (props) => {

    return (
        <aux>
        <div>
            Toolbar, SideDrawer, Backdrop
        </div>
        <main className="content">{props.children}</main>
        </aux>
    )


}


export default Layout;