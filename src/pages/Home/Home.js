import React from 'react';
import { Container, Grid, Items } from './Home.styles';
import Input from '../../components/Input/Input';

const Home = () => {
  return (
    <Container>
      <Grid>
        <div>
          <Items>
            <h1>Github User</h1>
            <Input placeholder='Search for a Github user' />
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
