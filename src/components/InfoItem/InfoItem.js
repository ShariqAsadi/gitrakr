import React from 'react';
import { Container, Text } from './InfoItem.styles';

const InfoItem = ({ icon, text }) => {
  return (
    <Container>
      {icon}
      <Text>{text}</Text>
    </Container>
  );
};

export default InfoItem;
