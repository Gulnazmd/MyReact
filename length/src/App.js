import './App.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MyCard from '../src/components/CreateCard/CreateCard';
import Layout from '../src/containers/Layout/Layout';
import CardBuilder from './containers/CardBuilder/CardBuilder';
import Data from '../src/components/ContactData/Data';


class App extends Component {
    render () {
      return (
          <Layout>
                <Switch>
                    <Route path="/" exact component={CardBuilder} />
                    <Route path="/create-card" component={MyCard} />
                    <Route path="/contact-data" component={Data} />
                </Switch>
          </Layout>
      );
    }
  }
  
  export default App;


