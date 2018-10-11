import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { fetchCryptocurrencies } from './redux/actions/cryptocurrenciesActions';
import DashboardPage from './components/pages/DashboardPage';
import CurrencyProfilePage from './components/pages/CurrencyProfilePage';

import './App.css';

const mapDispatchToProps = dispatch => {
	return {
        onFetchCryptocurrencies:
            ()=>dispatch(fetchCryptocurrencies())
    }
}

class App extends Component {
  componentWillMount() {
    const { onFetchCryptocurrencies } = this.props;
    onFetchCryptocurrencies();
    setInterval(onFetchCryptocurrencies, 60 * 1000);
    console.log('App will mount');
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={DashboardPage} />
          <Route path='/:name' component={CurrencyProfilePage} />
        </Switch>
      </Router>
    )
  }
}

export default connect(null, mapDispatchToProps)(App);
 