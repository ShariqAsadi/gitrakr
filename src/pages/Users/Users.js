import React, { useContext } from 'react';
import { Container, Name, UserDetails, Info } from './Users.styles';
import { GithubUsersContext } from '../../context/GithubUsersContext/GithubUsersContext';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { MdWork } from 'react-icons/md';
import { GoLocation, GoCalendar } from 'react-icons/go';
import Statistic from '../../components/Statistic/Statistic';
import SocialLink from '../../components/SocialLink/SocialLink';
import InfoItem from '../../components/InfoItem/InfoItem';
import moment from 'moment';
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
          <Info>
            <InfoItem icon={<MdWork className='icon' />} text={user.company} />
            <InfoItem
              icon={<GoLocation className='icon' />}
              text={user.location}
            />
            <InfoItem
              icon={<GoCalendar className='icon' />}
              text={moment(user.created_at).format('MMMM Do YYYY')}
            />
          </Info>
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
