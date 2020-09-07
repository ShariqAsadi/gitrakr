import styled from 'styled-components';

export const Container = styled.main`
  background-color: var(--clr-black);
  color: var(--clr-white-light);
  min-height: 100vh;
  min-width: 100vw;
  .navbar {
    width: 100%;
  }

  .icon {
    vertical-align: middle;
    font-size: 2.08rem;
  }

  .stats {
    display: grid;
    margin-top: 20px;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 2.5rem;
    justify-items: center;
  }
`;

export const Name = styled.h1`
  font-size: 3.2rem;
  margin-top: 20px;
`;

export const UserDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--clr-red);
  font-size: 1.1rem;
  min-width: 320px;
  margin-top: 20px;
`;

export const ChartContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  padding: 1rem 7rem;
  gap: 9rem;
`;

export const Label = styled.label`
  margin-top: 10px;
  display: inline-block;
  font-size: 2.4rem;
  color: var(--clr-black);
  font-weight: 500;
  letter-spacing: 1.7px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50rem, 1fr));
  place-items: center;
  gap: 9rem;
  padding: 1rem 7rem;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 150px;
    height: 150px;
    border-radius: 100%;
    border: 0.5rem solid var(--clr-red);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  /* flex-wrap: wrap; */
  /* justify-content: center; */
  /* align-items: center; */
  padding: 2.5rem;
`;

export const UserInfo = styled.div`
  margin-left: 2.5rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
