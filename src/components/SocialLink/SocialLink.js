import React from 'react';
import { Container } from './SocialLink.styles';

const SocialLink = ({ icon, href, text }) => {
  return (
    <Container>
      {icon}
      <span>
        <a href={href}>{text}</a>
      </span>
    </Container>
  );
};

export default SocialLink;
