import React, { Component} from 'react';
import PropTypes from 'prop-types';

import './BurgerIngredients.css';
//import classes from './BurgerIngredients.css';


class BurgerIngredients extends Component  {

  render() {
    let ingredient = null;

    switch (this.props.type) {
        case ('bread-bottom'):
      
          ingredient = <div className="BreadBottom"></div>
          break;
          case('bread-top'):
            ingredient = (
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                        <div className="Seeds2"></div>
                    </div>
            );
            break;
              case('beef'):
                ingredient = <div className="Beef"></div>
                break;
              case('cheese'):
                ingredient = <div className="Cheese"></div>
                break;
              case('vegancheese'):
                ingredient = <div className="VeganCheese"></div>
                break;
              case('salad'):
                ingredient = <div className="Salad"></div>
                break;
              case('tomato'):
                ingredient = <div className="Tomato"></div>
                break;
              case('bacon'):
                ingredient = <div className="Bacon"></div>
                break;
              case('fish'):
                ingredient = <div className="Fish"></div>
                break;
              case('seitan'):
                ingredient = <div className="Seitan"></div>
                break;
              case('chicken'):
                ingredient = <div className="Chicken"></div>
                break;
              case('sausage'):
                ingredient = <div className="Sausage"></div>
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