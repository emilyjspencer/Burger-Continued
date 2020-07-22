import React from 'react'
import Control from './Controls/Control';

import './Selection.css';

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
    { lable: 'Bacon', type: 'bacon'}
    
];

const selection = (props) => (

     <div className="Selection">
         
         {controls.map(control => {
             return (
             <Control
              key={control.label} 
              label={control.label}
              added={() => props.ingredientAdded(control.type)}
             
              />)
                       })}
         </div>



  )




export default selection;