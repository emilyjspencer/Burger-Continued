import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';

import classes from './ContactData.css';
import './ContactData.css';

class ContactData extends Component {
  state = {
      name: '',
      email: '',
      address: {
          street: '',
          postCode: ''
      }
  }

  render() {
      return (
          <div className={classes.ContactData}>
              <h4>Enter you contact information</h4>
              <form>
                  <input className="Input" type="text" name="name" placeholder="Enter your name" />
                  <input className="Input" type="text" name="email" placeholder="Enter your email address" />
                  <input className="Input" type="text" name="street" placeholder="Enter your street" />
                  <input className="Input" type="text" name="postcode" placeholder="Enter your post code" />
                  <Button btntype="Success">ORDER</Button>
              </form>
          </div>
      )
  }
}





export default ContactData;


