import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import DashboardPage from './components/pages/DashboardPage';
import CurrencyProfilePage from './components/pages/CurrencyProfilePage';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={DashboardPage} />
          <Route path='/:name' component={CurrencyProfilePage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
 