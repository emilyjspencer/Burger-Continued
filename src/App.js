import React, { Component } from 'react';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Layout from './hoc/Layout/Layout';
import { Route, Switch } from 'react-router-dom';

import styles from './App.module.css' 



class App extends Component {

  render() {

    return (
      <div className={styles.App}>
        <Layout>
          <Switch>
          <Route path="/" exact component={BurgerBuilder} />
          <Route path="/checkout" component={Checkout} />
          </Switch>
          </Layout>
      </div>
    )
  }
}

export default App;
