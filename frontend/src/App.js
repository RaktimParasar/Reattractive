import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//redux ---
import store from './store';
import { Provider } from 'react-redux';
//components ---
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import SinglePost from './components/SinglePost';
import AddPost from './components/AddPost';
import EditPost from './components/EditPost';
import EditComment from './components/EditComment';

const App = () =>  {
  return (
    <Provider store={store}>
      <Router>
          <main className="container">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Posts} />
              <Route exact path="/:category" component={Posts} />
              <Route exact path="/posts/:id" component={SinglePost} />
              <Route exact path="/add/post" component={AddPost} />
              <Route exact path="/edit/:id" component={EditPost} />
              <Route exact path="/editcomment/:id" component={EditComment} />
            </Switch>
          </main>
      </Router>
    </Provider>
  );
}

export default App;
