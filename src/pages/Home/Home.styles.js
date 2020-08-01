import styled from 'styled-components';
export const Container = styled.div`
  /* padding: 5px; */
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
    }
    &:first-child {
      /* border-right: 1px solid rgb(66 96 125); */
    }
    &:last-child {
      /* border-left: 1px solid rgb(66 96 125); */
    }
    /* &:hover {
      color: blue; /*  TODO: Look for a good color */
    /* box-shadow: 0 0 10px 5px blue; */
    /*} */
  }

  @media (max-width: 768px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
    div {
      &:first-child {
        border-right: none;
        /* border-bottom: 1px solid rgb(66 96 125); */
      }
      &:last-child {
        border-left: none;
        /* border-top: 1px solid rgb(66 96 125); */
      }
    }
  }
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  height: 120px;
  align-items: center;
  justify-content: space-between;
`;
