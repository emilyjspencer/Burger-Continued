import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

import styles from './Burger.module.css';


const Burger = (props) => {
    let ingredients = Object.keys( props.ingredients )
      .map( igKey => {
          // converting object in state to an array
          return [...Array(props.ingredients[igKey] )].map((_, index) => {
              return ( <BurgerIngredients key={igKey + index} type={igKey} />
              )
          
      })
    })
      .reduce((arr, el) => {
          return arr.concat(el)
      }, []);
      if (ingredients.length === 0) {
          ingredients = <p>Please add your ingredients</p>

      }
      console.log(ingredients);

    return (
      <div className={styles.Burger}>
          <BurgerIngredients type={"bread-top"} />
         {ingredients}
          <BurgerIngredients type={"bread-bottom"} />
      </div>

    )
    
}

export default Burger;