import React from 'react';
import { Wrapper } from './Statistic.styles';
const Statistic = ({ heading, count }) => {
  return (
    <Wrapper>
      <span>{count}</span>
      <span>{heading}</span>
    </Wrapper>
  );
};

export default Statistic;
