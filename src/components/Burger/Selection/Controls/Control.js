import React from 'react';

import './Control.css';

const control = (props) => {

    return (
    <div className="Control">
    <div className="Label">{props.label}</div>
    <button className="Add">+</button>
    <button className="Remove">-</button>

  </div>
    )


}


export default control;