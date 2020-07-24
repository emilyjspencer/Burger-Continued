import React from 'react';

import styles from './Control.module.css';

const control = (props) => {

    return (
    <div className={styles.Control}>
    <div className={styles.Label}>{props.label}</div>
    <button className={styles.Add} onClick={props.added}>+</button>
    <button className={styles.Remove} onClick={props.removed} disabled={props.disabled}>-</button>

  </div>
    )


}


export default control;