import React, { useContext } from 'react';
import { Container, Name, UserDetails } from './Users.styles';
import { GithubUsersContext } from '../../context/GithubUsersContext/GithubUsersContext';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import Statistic from '../../components/Statistic/Statistic';
import SocialLink from '../../components/SocialLink/SocialLink';
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
          <Name>{user.name}</Name>
          <UserDetails>
            <SocialLink
              icon={<AiFillGithub className='icon' />}
              href={user.html_url}
              text={user.login}
            />
            <SocialLink
              icon={<AiOutlineTwitter className='icon' />}
              href={`https://www.twitter.com/${user.twitter_username}`}
              text={user.twitter_username}
            />
          </UserDetails>
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
