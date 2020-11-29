import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//redux ---
import store from './store';
import { Provider } from 'react-redux';
//components ---
import Navbar from './components/Navbar';
import Homepage from './components/Homepage.js';

const App = () =>  {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Homepage} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
