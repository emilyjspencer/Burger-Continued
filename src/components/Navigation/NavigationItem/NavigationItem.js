import React from 'react';

import './NavigationItem.css';

const navigationItem = (props) => {

    return (
     <ul className="NavigationItem">
         <li><a href={props.link} className="active">{props.children} </a></li>
     </ul>

    )
}


export default navigationItem;