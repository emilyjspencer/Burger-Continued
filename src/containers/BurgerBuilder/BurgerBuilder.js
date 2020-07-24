import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Selection from '../../components/Burger/Selection/Selection';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import aux from '../../hoc/Aux/aux';

const INGREDIENTS_PRICES = {
  salad: 0.5,
  cheese: 0.8,
  bacon: 0.9,
  vegancheese: 0.9,
  setain: 1.2,
  fish: 1.2,
  beef: 1.2,
  chicken: 1.2,
  veggieburger: 1.0,
  tomato: 0.3,
  sausage: 0.9

}

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: {
        salad: 0,
        cheese: 0,
        bacon: 0,
        vegancheese: 0,
        seitan: 0,
        fish: 0,
        beef: 0,
        chicken: 0,
        veggieburger: 0,
        tomato: 0,
        sausage: 0 
      },
      totalPrice: 2,
      canOrder: false,
      readyToOrder: false

    }
  }

  readyToOrderHandler = () => {
    this.setState({ readyToOrder: true });
  }

  notReadyToOrderHandler = () => {
    this.setState({ readyToOrder: false });
  }

  continueWithOrderHandler =() => {
    alert('Continue with order')
  }

  updateOrderState = (ingredients) => {
    
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey]
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
      this.setState({canOrder: sum > 0});
      
  

  }

  addIngredientsHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const newTotalPrice = INGREDIENTS_PRICES[type] + this.state.totalPrice
   this.setState({
     ingredients: updatedIngredients,
     totalPrice: newTotalPrice
   })
   this.updateOrderState(updatedIngredients)
  }

  removeIngredientsHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const deductedPrice= INGREDIENTS_PRICES[type] 
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: deductedPrice
    })
    this.updateOrderState(updatedIngredients)
  }

  render() {
    const disabledInfo  = {
      ...this.state.ingredients
    }

    for (let key in disabledInfo) {
      disabledInfo[key] =  disabledInfo[key] <= 0
    }

    return (
     
      <aux>
        <Modal show={this.state.readyToOrder} modalClosed={this.notReadyToOrderHandler}>
          <OrderSummary 
            ingredients={this.state.ingredients} 
            price={this.state.totalPrice}
            continueWithOrder={this.continueWithOrderHandler}
            cancelOrder={this.notReadyToOrderHandler} 
            />
        </Modal>
        <div>
            <Burger ingredients={this.state.ingredients} />
        </div>
        <div><Selection 
          ingredientAdded={this.addIngredientsHandler} 
          ingredientRemoved={this.removeIngredientsHandler}
          disabled={disabledInfo} 
          canOrder={this.state.canOrder}
          price={this.state.totalPrice}
          ordered={this.readyToOrderHandler}
          />
        </div>
      </aux>

    )
  }
}


export default BurgerBuilder;
