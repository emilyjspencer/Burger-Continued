import React from 'react';

import './Control.css';

const control = (props) => {

    return (
    <div className="Control">
    <div className="Label">{props.label}</div>
    <button className="Add" onClick={props.added}>+</button>
    <button className="Remove" onClick={props.removed}>-</button>

  </div>
    )


}


export default control;