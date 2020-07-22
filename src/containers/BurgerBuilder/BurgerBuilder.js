import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Selection from '../../components/Burger/Selection/Selection';
import aux from '../../hoc/aux';

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
        setain: 0,
        fish: 0,
        beef: 0,
        chicken: 0,
        veggieburger: 0,
        tomato: 0,
        sausage: 0 
      },
      totalPrice: 2

    }
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
  }

  removeIngredientsHandler = (type) => {
   
  }

  render() {

    return (
      <aux>
        <div>
            <Burger ingredients={this.state.ingredients} />
        </div>
        <div><Selection ingredientAdded={this.addIngredientsHandler} /></div>
      </aux>

    )
  }
}


export default BurgerBuilder;
