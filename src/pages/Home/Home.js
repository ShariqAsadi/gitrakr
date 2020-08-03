import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { GithubUsersContext } from '../../context/GithubUsersContext/GithubUsersContext';
import { Container, Grid, Items } from './Home.styles';
import { FiGithub } from 'react-icons/fi';
import Input from '../../components/Input/Input';

const Home = () => {
  const history = useHistory();
  const data = useContext(GithubUsersContext);
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const onSearch = (e) => {
    e.preventDefault();
    history.push('/users');
  };

  return (
    <Container>
      <Grid>
        <div>
          <Items>
            <form onSubmit={onSearch}>
              <h1>
                <FiGithub />
                <span>Github User</span>
              </h1>
              <Input
                placeholder='Search for a Github user'
                value={search}
                onChange={handleSearch}
              />
            </form>
          </Items>
        </div>

        <div>
          <h1>Github Jobs</h1>
        </div>
      </Grid>
    </Container>
  );
};

export default Home;
