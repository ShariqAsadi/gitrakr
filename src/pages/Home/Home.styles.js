import styled from 'styled-components/macro';
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--clr-black);
`;

export const Grid = styled.div`
  display: grid;
  height: 100%;
  place-items: center;

  > div {
    height: 100%;
    width: 100%;
    display: flex;
    color: var(--clr-white-light);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    h1 {
      font-size: 4rem;
      svg {
        margin-left: 0.5em;
        font-size: 2.72rem;
      }
    }
  }
`;

export const Items = styled.div`
  form {
    display: grid;
    row-gap: 15px;
    place-items: center;
    width: 500px;
    @media (max-width: 550px) {
      width: 80vw;
    }
    span {
      letter-spacing: 5px;
    }
  }
`;

export const Error = styled.div`
  color: #b00020;
  font-size: 1.6rem;
  font-weight: 500;
  margin-top: 20px;
`;
