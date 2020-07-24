import React, { Component} from 'react';
import PropTypes from 'prop-types';

import styles from './BurgerIngredients.module.css';
//import classes from './BurgerIngredients.css';


class BurgerIngredients extends Component  {

  render() {
    let ingredient = null;

    switch (this.props.type) {
        case ('bread-bottom'):
      
          ingredient = <div className={styles.BreadBottom}></div>
          break;
          case('bread-top'):
            ingredient = (
                <div className={styles.BreadTop}>
                    <div className={styles.Seeds1}></div>
                        <div className={styles.Seeds2}></div>
                    </div>
            );
            break;
              case('beef'):
                ingredient = <div className={styles.Beed}></div>
                break;
              case('cheese'):
                ingredient = <div className={styles.Cheese}></div>
                break;
              case('vegancheese'):
                ingredient = <div className={styles.VeganCheese}></div>
                break;
              case('salad'):
                ingredient = <div className={styles.Salad}></div>
                break;
              case('tomato'):
                ingredient = <div className={styles.Tomato}></div>
                break;
              case('bacon'):
                ingredient = <div className={styles.Bacon}></div>
                break;
              case('fish'):
                ingredient = <div className={styles.Fish}></div>
                break;
              case('seitan'):
                ingredient = <div className={styles.Seitan}></div>
                break;
              case('chicken'):
                ingredient = <div className={styles.Chicken}></div>
                break;
              case('sausage'):
                ingredient = <div className={styles.Sausage}></div>
                break;

                default:
                ingredient = null;
            }

              return ingredient;

      }
    

}

BurgerIngredients.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredients;