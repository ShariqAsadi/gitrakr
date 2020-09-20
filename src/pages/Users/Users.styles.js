import styled from 'styled-components/macro';

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
`;

export const Stats = styled.div`
  display: flex;
  margin-top: 1.5rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.section`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
`;

export const Name = styled.h1`
  font-size: 3.2rem;
  margin-top: 20px;
  color: var(--clr-red);
`;

export const UserDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  > * {
    margin-top: 1.5rem;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  color: var(--clr-red);
  font-size: 1.1rem;
  > * {
    margin-top: 1.5rem;
  }
`;

export const ChartContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 9rem;
`;

export const Label = styled.label`
  margin-top: 10px;
  display: inline-block;
  font-size: 2.4rem;
  color: var(--clr-red);
  font-weight: 500;
  letter-spacing: 1.7px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 9rem;
  padding: 20px 0px;
`;

export const Bio = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: 1.3px;
  line-height: 20px;
  color: var(--clr-black);
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  figure {
    padding: 0.5rem;
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
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
