import React, { useReducer } from 'react';
import { userData } from '../../api/mocks/mockUserData';
import { repoData } from '../../api/mocks/mockRepoData';

const GithubUsersContext = React.createContext();

const initialState = {
  user: userData,
  repos: repoData,
  query: '',
};

const userReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_REPO':
      return { ...state, repos: action.payload };
    case 'SET_QUERY':
      return { ...state, query: action.payload };
    default:
      throw new Error('Something went wrong.');
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
