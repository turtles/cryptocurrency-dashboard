import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { registerRefreshInterval, clearRefreshInterval } from './redux/actions/idsActions';
import { fetchCryptocurrencies } from './redux/actions/cryptocurrenciesActions';
import DashboardPage from './components/pages/DashboardPage';
import CurrencyProfilePage from './components/pages/CurrencyProfilePage';

import './App.css';

const mapStateToProps = ({intervalId}) => ({
  intervalId
});

const mapDispatchToProps = dispatch => {
	return {
    onRegisterRefreshInterval: (intervalId) => (
      registerRefreshInterval(intervalId)
    ),
    onClearRefreshInterval:
      ()=>dispatch(clearRefreshInterval),
    onFetchCryptocurrencies:
      ()=>dispatch(fetchCryptocurrencies())
  }
}

class App extends Component {
  componentWillMount() {
    const { intervalId,
      onFetchCryptocurrencies,
      onRegisterRefreshInterval
    } = this.props;

    if (!intervalId) {
      onFetchCryptocurrencies();
      const intervalId = setInterval(onFetchCryptocurrencies, 60 * 1000);
      onRegisterRefreshInterval(intervalId);
    }
  }
  componentWillUnmount() {
    const { intervalId } = this.props;
    if (intervalId) {
      clearInterval(intervalId);
      
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
 