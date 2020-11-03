import React, { useReducer } from 'react';
// import { userData } from '../../api/mocks/mockUserData';
// import { repoData } from '../../api/mocks/mockRepoData';
import github from '../../api/github';
const GithubUsersContext = React.createContext();

const initialState = {
  user: null,
  repos: [],
  query: '',
  loading: false,
  error: { isError: false, message: '' },
  remainingRequests: 0,
};

const userReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_REPO':
      return { ...state, repos: action.payload, loading: false };
    case 'SET_QUERY':
      return { ...state, query: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: true };
    case 'SET_UNLOADING':
      return { ...state, loading: false };
    case 'SET_ERROR':
      return { ...state, error: { isError: true, message: action.payload } };
    case 'CLEAR_ERROR':
      return { ...state, error: { isError: false, message: '' } };
    case 'SET_REMAINING_REQUESTS':
      return { ...state, remainingRequests: action.payload };
    default:
      throw new Error('Something went wrong.');
  }
};

const getUserDetails = async (dispatch, id) => {
  try {
    dispatch({ type: 'SET_LOADING' });
    const result = await github.get(`/users/${id}`);
    dispatch({ type: 'SET_USER', payload: result.data });
  } catch (e) {
    dispatch({
      type: 'SET_ERROR',
      payload: 'User not found. Please enter a valid github user.',
    });
    throw e;
  }
};

const getRepos = async (dispatch, id, currentRepos = [], updatedPage = 1) => {
  try {
    let currentPage = updatedPage;
    let accumulatedRepos = [...currentRepos];
    const result = await github.get(
      `/users/${id}/repos?per_page=100&page=${currentPage}`
    );
    accumulatedRepos = [...accumulatedRepos, ...result.data];
    currentPage++;
    if (!result.data.length) {
      dispatch({ type: 'SET_REPO', payload: accumulatedRepos });
      await getRate(dispatch);
    } else {
      getRepos(dispatch, id, accumulatedRepos, currentPage);
    }
  } catch (e) {
    dispatch({
      type: 'SET_ERROR',
      payload: 'Oops! Something went wrong. Please try again later.',
    });
    throw e;
  }
};

const getRate = async dispatch => {
  try {
    const result = await github.get('/rate_limit');
    dispatch({ type: 'SET_REMAINING_REQUESTS', payload: result.data.rate.remaining });
  } catch (e) {
    throw e;
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

export { GithubUsersContext, GithubUsersProvider, getUserDetails, getRepos };
