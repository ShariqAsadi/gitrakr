import React, { useContext } from 'react';
import { Container } from './Users.styles';
import { GithubUsersContext } from '../../context/GithubUsersContext/GithubUsersContext';
const Users = () => {
  const {
    state: { user },
  } = useContext(GithubUsersContext);

  return (
    <Container>
      <main id='main'>
        <img className='avatar' src={user.avatar_url} alt='avatar' />
      </main>
    </Container>
  );
};

export default Users;
