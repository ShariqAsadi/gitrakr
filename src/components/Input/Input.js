import React from 'react';
import styled from 'styled-components/macro';
import { FaSearch } from 'react-icons/fa';

const Container = styled.div`
  position: relative;
  width: inherit;
  span {
    position: absolute;
    top: 13px;
    right: 9px;

    @media (max-width: 550px) {
      top: 21px;
    }
    .faSearch {
      color: var(--clr-text-blue);
      font-size: 2.88rem;
      @media (max-width: 550px) {
        font-size: 1.6rem;
      }
    }
  }
`;

const StyledInput = styled.input`
  outline: none;
  border-radius: 0.25rem;
  font-size: 3.2rem;
  font-family: 'Inconsolata', monospace;
  border: none;
  background: var(--clr-bg-blue);
  color: var(--clr-text-blue);
  padding: 10px 50px;
  text-align: center;
  width: inherit;

  @media (max-width: 550px) {
    padding: 10px 30px;
  }

  &:focus {
    &::placeholder {
      color: transparent;
    }
  }

  &::placeholder {
    font-size: 2.88rem;
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
