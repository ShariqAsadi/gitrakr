import React from 'react';

const GithubUsersContext = React.createContext();

const GithubUsersProvider = ({ children }) => (
  <GithubUsersContext.Provider value={'A user'}>
    {children}
  </GithubUsersContext.Provider>
);

export { GithubUsersContext, GithubUsersProvider };
