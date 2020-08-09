import styled from 'styled-components';

export const Container = styled.main`
  background-color: var(--clr-black);
  color: var(--clr-white-light);
  min-height: 100vh;
  min-width: 100vw;
  .navbar {
    width: 100%;
  }
  .user-info {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 50px 0px;
  }

  .avatar {
    width: 150px;
    height: 150px;
    border-radius: 100%;
    border: 0.5rem solid var(--clr-yellow);
  }

  .icon {
    vertical-align: middle;
    font-size: 1.3rem;
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
  font-size: 2rem;
  margin-top: 20px;
`;

export const UserDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  margin-top: 20px;
`;
