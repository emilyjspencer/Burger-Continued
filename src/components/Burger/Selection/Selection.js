import React from 'react'
import Control from './Controls/Control';

import styles from './Selection.module.css';

const controls = [
    { label: 'Cheese', type: 'cheese'},
    { label: 'Vegan Cheese', type: 'vegancheese'},
    { label: 'Salad', type: 'salad'},
    { label: 'Tomato', type: 'tomato'},
    { label: 'Chicken', type: 'chicken'},
    { label: 'Beef', type: 'beef'},
    { label: 'Fish', type: 'fish'},
    { label: 'Veggie Burger', type: 'veggieburger'},
    { label: 'Seitan', type: 'seitan'},
    { label: 'Sausage', type: 'sausage'},
    { label: 'Bacon', type: 'bacon'}
    
];

const selection = (props) => (

     <div className={styles.Selection}>
         <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
         {controls.map(control => {
             return (
             <Control
              key={control.label} 
              label={control.label}
              added={() => props.ingredientAdded(control.type)}
              removed={() => props.ingredientRemoved(control.type)}
              disabled={props.disabled[control.type]}
             
              />)
                       })}
                       <br />
                       <br />
                       <button 
                          className="OrderButton" 
                          disabled={!props.canOrder}
                          onClick={props.ordered}>See your order</button>
         </div>



  )




export default selection;