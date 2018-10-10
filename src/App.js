import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import DashboardPage from './components/pages/DashboardPage';
import CurrencyProfilePage from './components/pages/CurrencyProfilePage';

const App = () =>(
  <Router>
    <Switch>
      <Route exact path='/' component={DashboardPage} />
      <Route path='/:name' component={CurrencyProfilePage} />
    </Switch>
  </Router>
);

export default App;
 