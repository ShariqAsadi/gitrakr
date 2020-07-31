import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 5px;
  width: 100vw;
  height: 100vh;
`;

const Grid = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;

  div {
    cursor: pointer;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:hover {
      color: blue; /*  TODO: Look for a good color */
      box-shadow: 0 0 10px 5px blue;
    }
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
  }
`;

const Home = () => {
  return (
    <Container>
      <Grid>
        <div>
          <h3>Github User</h3>
        </div>

        <div>
          <h3>Github Jobs</h3>
        </div>
      </Grid>
    </Container>
  );
};

export default Home;
