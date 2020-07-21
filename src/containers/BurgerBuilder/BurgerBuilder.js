import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import aux from '../../hoc/aux';


class BurgerBuilder extends Component {

  render() {

    return (
      <aux>
        <div>
            <Burger />
        </div>
        <div>Options to add and remove ingredients</div>
      </aux>

    )
  }
}


export default BurgerBuilder;
