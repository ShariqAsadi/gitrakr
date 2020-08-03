import styled from 'styled-components';
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(26, 30, 34);
`;

export const Grid = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;

  > div {
    height: 100%;
    width: 100%;
    display: flex;
    color: rgb(246, 248, 250);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    h1 {
      font-size: 2.5rem;
      svg {
        margin-right: 0.2em;
        font-size: 1.7rem;
      }
    }
  }

  @media (max-width: 768px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
  }
`;

export const Items = styled.div`
  form {
    display: flex;
    flex-direction: column;
    height: 120px;
    align-items: center;
    justify-content: space-between;
  }
`;
