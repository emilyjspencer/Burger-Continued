import React, { Component } from 'react';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

import Layout from './hoc/Layout/Layout';

import styles from './App.module.css' 



class App extends Component {

  render() {

    return (
      <div className={styles.App}>
        <Layout>
          <BurgerBuilder />
          </Layout>
      </div>
    )
  }


}

 


export default App;
