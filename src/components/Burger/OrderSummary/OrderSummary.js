import React, { Component } from 'react';
import aux from '../../../hoc/Aux/aux'; 
import Button from '../../UI/Button/Button';

import './OrderSummary.css';

class OrderSummary extends Component {

  componentWillUpdate() {
    console.log('[OrderSummary] Will Update')
  }

    render() {

      const ingredientSummary = Object.keys(this.props.ingredients)
      // convert to array 
      .map(igKey => {
          return ( 
            <li key={igKey}>
                <span style={ {textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
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
          <p><strong>Total Cost: {this.props.price.toFixed(2)}</strong></p>
          <p>Continue to checkout</p>
          <Button className="Danger" clicked={this.props.cancelOrder}>CANCEL</Button>
          <Button className="Success" clicked={this.props.continueWithOrder}>CONTINUE</Button>

          </aux>
  )
};
}


export default OrderSummary;
