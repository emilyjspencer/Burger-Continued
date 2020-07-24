import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import aux from '../../../hoc/aux';
import classes from './SideDrawer.css';

import './SideDrawer.css';
  
const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];

  }


    return (
      <aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={"SideDrawer"}>
          <Logo height="11%" />
          <nav>
             <NavigationItems /> 
          </nav>
      </div>
      </aux>


    );
};

export default sideDrawer;