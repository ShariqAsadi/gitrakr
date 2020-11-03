import React from 'react';
import Home from './pages/Home/Home';
import Users from './pages/Users/Users';
import NotFound from './pages/NotFound/NotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GithubUsersProvider } from './context/GithubUsersContext/GithubUsersContext';

function App() {
  return (
    <>
      <GithubUsersProvider>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/users/:id' component={Users} />
            <Route path='*' component={NotFound} />
          </Switch>
        </Router>
      </GithubUsersProvider>
    </>
  );
}

export default App;
