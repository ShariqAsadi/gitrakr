import React, { useContext, useEffect, useState } from 'react';
import { Container, Name, UserDetails, Info } from './Users.styles';
import { GithubUsersContext } from '../../context/GithubUsersContext/GithubUsersContext';
import { Doughnut } from 'react-chartjs-2';
import languageColors from '../../utils/languageColors';
import { chartData, chartOptions } from '../../utils/chart';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { MdWork } from 'react-icons/md';
import { GoLocation, GoCalendar } from 'react-icons/go';
import Statistic from '../../components/Statistic/Statistic';
import SocialLink from '../../components/SocialLink/SocialLink';
import InfoItem from '../../components/InfoItem/InfoItem';
import Card from '../../components/Card/Card';
import moment from 'moment';
const Users = () => {
  const {
    state: { user, repos },
  } = useContext(GithubUsersContext);
  const [languages, setLanguages] = useState([]);
  const [languagesCount, setLanguagesCount] = useState([]);
  const [languageBorderColors, setLanguageBorderColors] = useState([]);
  const [languageBackgroundColors, setLanguageBackgroundColors] = useState([]);

  console.log(user);
  console.log(repos);

  useEffect(() => {
    let languagesWithCounts = repos.reduce((accumulator, currentValue) => {
      const { language } = currentValue;
      if (!language) return accumulator;
      accumulator[language] = (accumulator[language] || 0) + 1;
      return accumulator;
    }, {});
    setLanguages(Object.keys(languagesWithCounts));
    setLanguagesCount(Object.values(languagesWithCounts));
    setLanguageBorderColors(
      Object.keys(languagesWithCounts).map((color) => languageColors[color])
    );
    setLanguageBackgroundColors(
      Object.keys(languagesWithCounts).map(
        (color) => `${languageColors[color]}B3`
      )
    );
  }, [repos]);

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
      <div>
        <Card>
          <Doughnut
            data={chartData({
              labels: languages,
              data: languagesCount,
              backgroundColor: languageBackgroundColors,
              borderColor: languageBorderColors,
            })}
            options={chartOptions}
          />
        </Card>
      </div>
    </Container>
  );
};

export default Users;
