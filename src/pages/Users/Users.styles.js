import styled from 'styled-components/macro';

export const Container = styled.main`
  background-color: var(--clr-black);
  color: var(--clr-white-light);
  min-height: 100vh;
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
  color: var(--clr-text-blue);
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
  margin: 10px 0px;
  display: inline-block;
  font-size: 2.4rem;
  color: var(--clr-bg-blue);
  font-weight: 500;
  letter-spacing: 1.7px;
`;

export const SubLabel = styled.label`
  font-size: 1.5rem;
  display: block;
  font-weight: 400;
  color: var(--clr-bg-blue);
`;

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 90px);
`

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
      border: 0.5rem solid var(--clr-placeholder-blue);
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
