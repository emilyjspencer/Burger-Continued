import React, { Component } from 'react';
import aux from '../../hoc/aux';


class BurgerBuilder extends Component {

  render() {

    return (
      <aux>
        <div>
            Burger image with ingredients
        </div>
        <div>Options to add and remove ingredients</div>
      </aux>

    )
  }
}


export default BurgerBuilder;
