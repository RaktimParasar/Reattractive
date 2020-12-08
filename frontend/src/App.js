import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//redux ---
import store from './store';
import { Provider } from 'react-redux';
//components ---
import Navbar from './components/Navbar';
import Homepage from './components/Homepage.js';
import SinglePost from './components/SinglePost';
import AddPost from './components/AddPost';
import EditPost from './components/EditPost';

const App = () =>  {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/:category" component={Homepage} />
            <Route exact path="/posts/:id" component={SinglePost} />
            <Route exact path="/add/post" component={AddPost} />
            <Route exact path="/edit/:id" component={EditPost} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
