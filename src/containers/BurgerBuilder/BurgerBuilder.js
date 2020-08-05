import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Selection from '../../components/Burger/Selection/Selection';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import aux from '../../hoc/Aux/aux';
import axios from '../../axios-orders';

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
      ingredients: null,
      totalPrice: 2,
      canOrder: false,
      readyToOrder: false,
      loading: false,
      error: null

    }
  }

  componentDidMount = () => {
    axios.get('https://react-burger-6b862.firebaseio.com/orders/ingredients.json')
      .then(response => {
        this.setState({ ingredients: response.data });
      })
      .catch(error => {
        this.setState({ error: true})
      })
  }

  readyToOrderHandler = () => {
    this.setState({ readyToOrder: true });
  }

  notReadyToOrderHandler = () => {
    this.setState({ readyToOrder: false });
  }

  continueWithOrderHandler = () => {
    this.setState( { loading: true } );
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'Emily S',
        address: { 
          street: 'Happyland',
          postcode: '343532',
          country: 'England',
        },
        email: 'emily@test.com'
      },
      delivery: 'fast'
    }
    axios.post('/orders.json', order)
      .then(response => {
        this.setState( { loading: false, readyToOrder: false });
    }  )
      .catch(error => {
        this.setState( { loading: false, readyToOrder: false } );
      } );
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

    let orderSummary = null;
  
    let burger = this.state.error ? <p>Ingredients can't be loaded</p>: <Spinner />;

    if (this.state.ingredients) {
      burger = (
      <aux>
      <Burger ingredients={this.state.ingredients} />

      <Selection 
        ingredientAdded={this.addIngredientsHandler} 
        ingredientRemoved={this.removeIngredientsHandler}
        disabled={disabledInfo} 
        canOrder={this.state.canOrder}
        price={this.state.totalPrice}
        ordered={this.readyToOrderHandler}
        />
        </aux>
    );
    orderSummary = <OrderSummary 
    ingredients={this.state.ingredients} 
    price={this.state.totalPrice}
    continueWithOrder={this.continueWithOrderHandler}
    cancelOrder={this.notReadyToOrderHandler} 
    />
      }

    if ( this.state.loading ) {
      orderSummary = <Spinner />
    }

    return (
     <aux>
        <Modal show={this.state.readyToOrder} modalClosed={this.notReadyToOrderHandler}>
          {orderSummary}

        </Modal>
        {burger}
      </aux>
    ) 
  }
}
  

export default withErrorHandler(BurgerBuilder, axios);
