import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import aux from '../../hoc/aux';


class BurgerBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: {
        salad: 1,
        setain: 1,
        bacon: 2,
        tomato: 2,
        cheese: 3
      }

    }
  }
  render() {

    return (
      <aux>
        <div>
            <Burger ingredients={this.state.ingredients} />
        </div>
        <div>Options to add and remove ingredients</div>
      </aux>

    )
  }
}


export default BurgerBuilder;
