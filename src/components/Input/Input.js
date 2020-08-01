import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  outline: none;
  border-radius: 0.25rem;
  font-size: 2rem;
  font-family: 'Inconsolata', monospace;
  border: none;
  background: rgb(66 96 125 / 88%);
  color: rgb(46 144 239 / 100%);
  padding: 10px;
  text-align: center;

  &:focus {
    &::placeholder {
      color: transparent;
    }
  }

  &::placeholder {
    font-size: 1.8rem;
    color: rgb(46 144 239 / 70%);
  }
`;

const Input = (props) => {
  return <StyledInput type='text' {...props} />;
};

export default Input;
