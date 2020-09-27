import React from 'react';
import { Container } from './Button.styles';

const Button = (props) => {
  return <Container {...props}>{props.children}</Container>;
};

export default Button;
