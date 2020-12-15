import React from 'react';
import styled from 'styled-components/macro';
import { FaSearch } from 'react-icons/fa';

const Container = styled.div`
  position: relative;
  width: inherit;
  span {
    position: absolute;
    top: 17px;
    left: 9px;
    .faSearch {
      color: var(--clr-text-blue);
      font-size: 2rem;
    }
  }
`;

const StyledInput = styled.input`
  outline: none;
  border-radius: 0.25rem;
  border: 1px solid var(--clr-text-blue);
  font-family: 'Inconsolata', monospace;
  background: #34495e;
  color: var(--clr-text-blue);
  padding: 10px 20px 10px 50px;
  text-align: center;
  font-size: 3rem;
  width: 100%;
  border-top-left-radius: ${props => props.profile && '25px'};
  border-bottom-left-radius: ${props => props.profile && '25px'};
  &:focus {
    &::placeholder {
      color: transparent;
    }
  }

  &::placeholder {
    color: var(--clr-placeholder-blue);
  }
`;

const Input = props => {
  return (
    <>
      <Container>
        <StyledInput type='text' {...props} />
        <span>
          <FaSearch className='faSearch' />
        </span>
      </Container>
    </>
  );
};

export default Input;
