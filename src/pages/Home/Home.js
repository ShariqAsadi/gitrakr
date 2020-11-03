import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { GithubUsersContext } from '../../context/GithubUsersContext/GithubUsersContext';
import { Container, Grid, Items, Error } from './Home.styles';
import { FiGithub } from 'react-icons/fi';
import Input from '../../components/Input/Input';

const Home = () => {
  const history = useHistory();
  const context = useContext(GithubUsersContext);
  const { state, dispatch } = context;
  const {error} = state;
  useEffect(() => {
    dispatch({type: 'SET_QUERY', payload: ''})
  }, [dispatch])

  const handleSearch = (e) => {
    const { value } = e.target;
    dispatch({ type: 'SET_QUERY', payload: value });
  };

  const onSearch = (e) => {
    e.preventDefault();
    dispatch({ type: 'CLEAR_ERROR' });
    history.push(`/users/${state.query}`);
  };

  return (
    <Container>
      <Grid>
        <div>
          <Items>
            <form onSubmit={onSearch}>
              <h1>
                <span>Gitrakr</span>
                <FiGithub />
              </h1>
              <Input
                placeholder='Search for a Github user'
                value={state.query}
                onChange={handleSearch}
              />
            {error.isError && <Error>{error.message}</Error>}
            </form>
          </Items>
        </div>
      </Grid>
    </Container>
  );
};

export default Home;
