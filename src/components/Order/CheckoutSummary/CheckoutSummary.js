import React from 'react';

import Burger from '../../Burger/Burger';

import Button from '../../UI/Button/Button';

import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
  return (
      <div className={classes.CheckoutSummary}>
          <h1>Enjoy your burger!</h1>
          <div style={{width: '300px', height: '300px', margin: 'auto'}}>
            <Burger ingredients={props.ingredients}/>
          </div>
          <Button 
            
            btnType="Danger">CANCEL</Button>
          <Button 
            
            btnType="Success">CONTINUE</Button>
      </div>
  )

}


export default checkoutSummary;