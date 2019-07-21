import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import PortfolioBuilder from './containers/portfolioBuilder/portfolioBuilder';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Layout>
          <PortfolioBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
