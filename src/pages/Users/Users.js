import React, { useContext } from 'react';
import { Container } from './Users.styles';
import { GithubUsersContext } from '../../context/GithubUsersContext/GithubUsersContext';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
const Users = () => {
  const {
    state: { user },
  } = useContext(GithubUsersContext);
  console.log(user);
  return (
    <Container>
      <section className='navbar'>
        <div>Navbar</div>
      </section>

      <section id='main'>
        <div className='user-info'>
          <img className='avatar' src={user.avatar_url} alt='avatar' />
          <h1>{user.name}</h1>
          <div className='user-details'>
            <div className='handle'>
              <AiFillGithub className='icon' />
              <span>
                <a href={user.html_url}>{user.login}</a>
              </span>
            </div>
            {user.twitter_username ? (
              <div className='handle'>
                <AiOutlineTwitter className='icon' />
                <span>
                  <a href={user.html_url}>{user.twitter_username}</a>
                </span>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Users;
