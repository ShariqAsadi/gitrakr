import React, { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import { Nav, Search, Icon } from './Navbar.styles';
import Input from '../Input/Input';
import { GithubUsersContext } from '../../context/GithubUsersContext/GithubUsersContext';
import { FaInfoCircle } from 'react-icons/fa';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale-extreme.css';

const Navbar = () => {
  const { state, dispatch } = useContext(GithubUsersContext);
  const { query, remainingRequests } = state;
  const history = useHistory();
  const variant =
    remainingRequests >= 40
      ? 'healthy'
      : remainingRequests >= 20
      ? 'warning'
      : 'critical';

  const onUserChange = e => {
    dispatch({ type: 'SET_QUERY', payload: e.target.value });
  };

  const onSearch = e => {
    e.preventDefault();
    history.push(`/users/${query}`);
  };

  return (
    <Nav>
      <Link to='/'>GiTrakr</Link>
      <form onSubmit={onSearch}>
        <Search>
          <Input value={query} onChange={onUserChange} placeholder='Search' />
        </Search>
      </form>
      {remainingRequests && (
        <Tippy
          content={<span>{`You have ${remainingRequests} requests left.`}</span>}
          animation='scale-extreme'
          placement='bottom-start'
        >
          <Icon variant={variant}>
            <FaInfoCircle />
          </Icon>
        </Tippy>
      )}
    </Nav>
  );
};

export default Navbar;
