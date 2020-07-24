import React, { Component } from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import aux from '../../hoc/Aux/aux';
import styles from './Layout.module.css';

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
        
        <main className={styles.Content}>{this.props.children}</main>
        </aux>
    )
  }
  }
  


export default Layout;