import React from 'react'
import Control from './Controls/Control';

import './Selection.css';

const controls = [
    { label: 'Cheese', type: 'cheese'},
    { label: 'VeganCheese', type: 'vegancheese'},
    { label: 'Salad', type: 'salad'},
    { label: 'Tomato', type: 'tomato'},
    { label: 'Chicken', type: 'chicken'},
    { label: 'Beef', type: 'beef'},
    { label: 'Fish', type: 'fish'},
    { label: 'VeggieBurger', type: 'veggieburger'},
    { label: 'Seitan', type: 'seitan'},
    
];

const selection = (props) => {
  return (
     <div className="Selection">
         {controls.map(control => (
             <Control key={control.label} label={control.label} />
         ))}
         </div>



  )


}

export default selection;