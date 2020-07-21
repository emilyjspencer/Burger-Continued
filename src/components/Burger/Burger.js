import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

import './Burger.css';


const Burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
      .map(igKey => {
          // converting object in state to an array
          return [...Array(props.ingredients[igKey])].map((_, index) => {
              return <BurgerIngredients key={igKey + index} type={igKey} />
          });
      })

    return (
      <div className="Burger">
          <BurgerIngredients type="bread-top" />
         {transformedIngredients}
          <BurgerIngredients type="bread-bottom" />
      </div>

    )
}

export default Burger;