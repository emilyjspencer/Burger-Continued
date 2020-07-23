import React from 'react';
import aux from '../../../hoc/aux';
import Backdrop from '../Backdrop/Backdrop';

import './Modal.css';

const modal = (props) => {

    return (
        <aux>
            <Backdrop show={props.show} clicked={props.modalClosed} />
        <div className="Modal"
        style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
        }}>
            {props.children}
        </div>
        </aux>
    )
}


export default modal;