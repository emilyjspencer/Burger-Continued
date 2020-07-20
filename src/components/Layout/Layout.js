import React from 'react';

import aux from '../../hoc/aux';

const Layout = (props) => {

    return (
        <aux>
        <div>
            Toolbar, SideDrawer, Backdrop
        </div>
        <main>{props.children}</main>
        </aux>
    )


}


export default Layout;