import React, { useContext, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  Container,
  Name,
  UserDetails,
  Info,
  ChartContainer,
  Label,
  Grid,
  Bio,
  UserContainer,
  UserInfo,
  Content,
  Stats,
  SubLabel,
  Loader
} from './Users.styles';
import {
  GithubUsersContext,
  getUserDetails,
  getRepos,
} from '../../context/GithubUsersContext/GithubUsersContext';
import { Doughnut, Pie, Bar } from 'react-chartjs-2';
import { ScaleLoader } from 'react-spinners';
import useChart from '../../hooks/useChart';
import { chartData, chartOptions } from '../../utils/chart';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { MdWork } from 'react-icons/md';
import { GoLocation, GoCalendar } from 'react-icons/go';
import Statistic from '../../components/Statistic/Statistic';
import SocialLink from '../../components/SocialLink/SocialLink';
import InfoItem from '../../components/InfoItem/InfoItem';
import Card from '../../components/Card/Card';
import moment from 'moment';
import Navbar from '../../components/Navbar/Navbar';

const Users = () => {
  const { state, dispatch } = useContext(GithubUsersContext);
  const { user, repos, loading } = state;

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'SET_QUERY', payload: id });
  }, [id, dispatch]);

  useEffect(() => {
    async function getDetailsAndCheckLimit() {
      try {
        await getUserDetails(dispatch, id);
        await getRepos(dispatch, id);
      } catch (e) {
        history.push('/');
      }
    }
    getDetailsAndCheckLimit();
  }, [id, dispatch, history]);

  const { languages, starLanguages, mostPopularRepos } = useChart(repos);
  return (
    <Container>
      <Navbar />
      <Content>
        {loading ? (
          <Loader>
            <ScaleLoader color='#2E90EF' height='35px' width='10px' radius='5px' margin='5px' />
          </Loader>
        ) : (
          <>
            <section>
              <Grid>
                <Card>
                  <UserContainer>
                    <figure>
                      <img src={user?.avatar_url} alt='avatar' />
                    </figure>
                    <UserInfo>
                      <Name>{user?.name}</Name>
                      <Bio>{user?.bio}</Bio>
                      <UserDetails>
                        <SocialLink
                          icon={<AiFillGithub className='icon' />}
                          href={user?.html_url}
                          text={user?.login}
                        />
                        {user?.twitter_username && (
                          <SocialLink
                            icon={<AiOutlineTwitter className='icon' />}
                            href={`https://www.twitter.com/${user?.twitter_username}`}
                            text={user?.twitter_username}
                          />
                        )}
                      </UserDetails>
                      <Info>
                        {user?.company && (
                          <InfoItem
                            icon={<MdWork className='icon' />}
                            text={user?.company}
                          />
                        )}
                        {user?.location && (
                          <InfoItem
                            icon={<GoLocation className='icon' />}
                            text={user?.location}
                          />
                        )}
                        <InfoItem
                          icon={<GoCalendar className='icon' />}
                          text={moment(user?.created_at).format('MMMM Do YYYY')}
                        />
                      </Info>
                      <Stats>
                        <Statistic heading='Followers' count={user?.followers} />
                        <Statistic heading='Following' count={user?.following} />
                        <Statistic heading='Repos' count={user?.public_repos} />
                        <Statistic heading='Gists' count={user?.public_gists} />
                      </Stats>
                    </UserInfo>
                  </UserContainer>
                </Card>
              </Grid>
            </section>
            <ChartContainer>
              <Card>
                <Label>Most used languages</Label>
                <Doughnut
                  data={chartData({
                    labels: languages.labels,
                    data: languages.data,
                    backgroundColor: languages.backgroundColors,
                    borderColor: languages.borderColors,
                  })}
                  options={chartOptions({ showLegend: true })}
                  width={400}
                  height={400}
                />
              </Card>
              <Card>
                <Label>Most popular Repos</Label>
                <Bar
                  data={chartData({
                    labels: mostPopularRepos.labels,
                    data: mostPopularRepos.data,
                    backgroundColor: mostPopularRepos.backgroundColors,
                    borderColor: mostPopularRepos.borderColors,
                  })}
                  options={chartOptions({ showLegend: false })}
                  width={300}
                  height={300}
                />
              </Card>
              <Card>
                <Label>Stars per language</Label>
                {starLanguages.data.length ? (
                  <Pie
                    data={chartData({
                      labels: starLanguages.labels,
                      data: starLanguages.data,
                      backgroundColor: starLanguages.backgroundColors,
                      borderColor: starLanguages.borderColors,
                    })}
                    options={chartOptions({ showLegend: true })}
                    width={300}
                    height={300}
                  />
                ) : (
                  <SubLabel>Nothing to see here...</SubLabel>
                )}
              </Card>
            </ChartContainer>
          </>
        )}
      </Content>
    </Container>
  );
};

export default Users;
