import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';

import classes from './ContactData.css';
import './ContactData.css';
import axios from '../../../axios-orders';

class ContactData extends Component {
  state = {
      name: '',
      email: '',
      address: {
          street: '',
          postCode: ''
      },
      loading: false
  }

  orderHandler = (event) => {
      event.preventDefault();
      console.log(this.props.ingredients);

       this.setState( { loading: true } );
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
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
        this.setState( { loading: false });
        
    }  )
      .catch(error => {
        this.setState( { loading: false } );
      } );

  }

  render() {
      let form = (
        <form>
                  <input className="Input" type="text" name="name" placeholder="Enter your name" />
                  <input className="Input" type="text" name="email" placeholder="Enter your email address" />
                  <input className="Input" type="text" name="street" placeholder="Enter your street" />
                  <input className="Input" type="text" name="postcode" placeholder="Enter your post code" />
                  <Button btntype="Success" clicked={this.orderHandler}>ORDER</Button>
              </form>
      );
      if (this.state.loading) {
          form = <Spinner />
      }
      return (
          <div className={classes.ContactData}>
              <h4>Enter you contact information</h4>
              {form}
          </div>
      )
  }
}





export default ContactData;


