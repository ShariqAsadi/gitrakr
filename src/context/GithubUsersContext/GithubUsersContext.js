import React, { useReducer } from 'react';
import { userData } from '../../api/mockUserData';

const GithubUsersContext = React.createContext();

const initialState = {
  user: userData,
};

const userReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return { ...state, user: action.payload };
  }
};

const GithubUsersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <GithubUsersContext.Provider value={{ state, dispatch }}>
      {children}
    </GithubUsersContext.Provider>
  );
};

export { GithubUsersContext, GithubUsersProvider };
