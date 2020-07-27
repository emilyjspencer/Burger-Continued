import React, { Component } from 'react';
import aux from '../../../hoc/Aux/aux';
import Backdrop from '../Backdrop/Backdrop';

import styles from './Modal.module.css';

class Modal extends Component  {

  shouldComponentUpdate(nextProps, nextState) {
     return (nextProps.show !== this.props.show || nextProps.children !== this.props.children ) 
      
  }

  componentWillUpdate () {
      console.log('[Modal] Will update')
  }

    render() {
    return (
        <aux>
            <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div className={styles.Modal}
        style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
        }}>
            {this.props.children}
        </div>
        </aux>
    )
}
}


export default Modal;