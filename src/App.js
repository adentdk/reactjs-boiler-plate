import React from 'react';
import { createBrowserHistory } from 'history';
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';

// Routes
import {routes} from './routes/routes';
// Routes
import { MappedRoute } from './routes/components';
// Stores
// Browser history
const browserHistory = createBrowserHistory();

const App = () => {
  return (
      <BrowserRouter>
        <Switch>
          <MappedRoute history={browserHistory} routes={routes} />
        </Switch>
      </BrowserRouter>
  );
};

export default App;
