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
  }

  .avatar {
    width: 150px;
    border-radius: 100%;
    border: 0.5rem solid var(--clr-yellow);
  }

  h1 {
    font-size: 2rem;
  }

  .user-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
  }

  .handle {
    font-size: 1.5rem;
    font-weight: 400;
    .icon {
      vertical-align: middle;
      font-size: 1.3rem;
    }
    a {
      margin-left: 0.2em;
      color: var(--clr-yellow);
      text-decoration: none;
      cursor: pointer;
    }
  }
`;
