import React, { Component } from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import aux from '../../hoc/aux';
import './Layout.css';

class Layout extends Component {
  constructor(props) {
      super(props);

      this.state = {
        showSideDrawer: false
      }
  }
  

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer};   
  });
  };

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }

  render() {
    return (
        <aux>
        
            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
            <SideDrawer 
              open={this.state.showSideDrawer}  
              closed={this.sideDrawerClosedHandler}></SideDrawer>
        
        <main className="content">{this.props.children}</main>
        </aux>
    )
  }
  }
  


export default Layout;