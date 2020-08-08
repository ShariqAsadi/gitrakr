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
                  <a href={`https://www.twitter.com/${user.twitter_username}`}>
                    {user.twitter_username}
                  </a>
                </span>
              </div>
            ) : null}
          </div>
          <div className='stats'>
            <div>
              <span className='stats-heading'>Followers</span>
              <span>{user.followers}</span>
            </div>
            <div>
              <span className='stats-heading'>Following</span>
              <span>{user.following}</span>
            </div>
            <div>
              <span className='stats-heading'>Repos</span>
              <span>{user.public_repos}</span>
            </div>
            <div>
              <span className='stats-heading'>Gists</span>
              <span>{user.public_gists}</span>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Users;
