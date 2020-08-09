import React from 'react';
import { Wrapper } from './Statistic.styles';
const Statistic = ({ heading, count }) => {
  return (
    <Wrapper>
      <span>{heading}</span>
      <span>{count}</span>
    </Wrapper>
  );
};

export default Statistic;
