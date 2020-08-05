import React, { Component } from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component  {
    

    state = {
        ingredients: {
            salad: 1,
            cheese: 1,
            bacon: 1,
            vegancheese: 1,
            seitan: 1,
            fish: 1,
            beef: 1,
            chicken: 1,
            veggieburger: 1,
            tomato: 1,
            sausage: 1
        }
    }

    render() {
     return (
        <div>
            <CheckoutSummary ingredients={this.state.ingredients} />
        </div>
     )
 }

}


export default Checkout;

