import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

import './Burger.css';


const Burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
      .map(igKey => {
          // converting object in state to an array
          return [...Array(props.ingredients[igKey])].map((_, index) => {
              return <BurgerIngredients key={igKey + index} type={igKey} />
          });
      })
      .reduce((arr, el) => {
          return arr.concat(el)
      }, []);
      if (transformedIngredients.length === 0) {
          transformedIngredients = <p>Please add your ingredients</p>

      }
      console.log(transformedIngredients);

    return (
      <div className="Burger">
          <BurgerIngredients type="bread-top" />
         {transformedIngredients}
          <BurgerIngredients type="bread-bottom" />
      </div>

    )
}

export default Burger;