import React from 'react';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GithubUsersProvider } from './context/GithubUsersContext/GithubUsersContext';
function App() {
  return (
    <>
      <GithubUsersProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/users'>
              <div>Users</div>
            </Route>
            <Route exact path='/jobs'>
              <div>Jobs</div>
            </Route>
          </Switch>
        </Router>
      </GithubUsersProvider>
    </>
  );
}

export default App;
