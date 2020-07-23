import React from 'react';
import aux from '../../../hoc/aux'; 
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    // convert to array 
    .map(igKey => {
        return ( 
          <li key={igKey}>
              <span style={ {textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
          </li>
        )
  })
    

  return (
      <aux>
          <h3>Your order</h3>
          <p>Your burger contains the following:</p>
          <ul>
           {ingredientSummary}
          </ul>
          <p>Continue to checkout</p>
          <Button className="Danger" clicked={props.cancelOrder}>CANCEL</Button>
          <Button className="Success" clicked={props.continueWithOrder}>CONTINUE</Button>

          </aux>
  )
};


export default orderSummary;
