import React from 'react';
import Home from './pages/Home/Home';
import Users from './pages/Users/Users';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GithubUsersProvider } from './context/GithubUsersContext/GithubUsersContext';
function App() {
  return (
    <>
      <Router>
        <Switch>
          <GithubUsersProvider>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/users/:id'>
              <Users />
            </Route>
          </GithubUsersProvider>
          <Route exact path='/jobs'>
            <div>Jobs</div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
