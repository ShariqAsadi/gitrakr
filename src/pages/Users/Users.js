import React, { useContext } from 'react';
import { Container } from './Users.styles';
import { GithubUsersContext } from '../../context/GithubUsersContext/GithubUsersContext';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import Statistic from '../../components/Statistic/Statistic';
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
            <Statistic heading='Followers' count={user.followers} />
            <Statistic heading='Following' count={user.following} />
            <Statistic heading='Repos' count={user.public_repos} />
            <Statistic heading='Gists' count={user.public_gists} />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Users;
