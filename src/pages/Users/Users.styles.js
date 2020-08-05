import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--clr-black);
  color: var(--clr-white-light);
  min-height: 100vh;
  #main {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 1fr 1fr;
  }

  .avatar {
    width: 150px;
    border-radius: 100%;
    border: 0.5rem solid var(--clr-yellow);
  }
`;
