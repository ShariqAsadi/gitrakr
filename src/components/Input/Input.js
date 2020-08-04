import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const Container = styled.div`
  position: relative;
  span {
    position: absolute;
    top: 13px;
    right: 9px;
    .faSearch {
      color: var(--clr-text-blue);
      font-size: 1.8rem;
    }
  }
`;

const StyledInput = styled.input`
  outline: none;
  border-radius: 0.25rem;
  font-size: 2rem;
  font-family: 'Inconsolata', monospace;
  border: none;
  background: var(--clr-bg-blue);
  color: var(--clr-text-blue);
  padding: 10px 50px;
  text-align: center;

  &:focus {
    &::placeholder {
      color: transparent;
    }
  }

  &::placeholder {
    font-size: 1.8rem;
    color: var(--clr-placeholder-blue);
  }
`;

const Input = (props) => {
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
