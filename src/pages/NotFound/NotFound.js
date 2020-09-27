import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import Button from '../../components/Button/Button';
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: clamp(8rem, 30vw, 25rem);
  min-height: 100vh;
  color: var(--clr-bg-blue);
  text-transform: uppercase;
  span:nth-child(2) {
    font-size: clamp(2rem, 10vw, 5rem);
    margin-top: 0px;
    margin-bottom: 30px;
  }
`;

const NotFound = () => {
  const history = useHistory();
  const redirect = () => {
    console.log('woirks?');
    history.push('/');
  };

  return (
    <>
      <Container>
        <span>Oops!</span>
        <span>Page not found</span>
        <Button onClick={redirect}>Go to homepage</Button>
      </Container>
    </>
  );
};

export default NotFound;
