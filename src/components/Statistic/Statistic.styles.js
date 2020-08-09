import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--clr-yellow-shade);
  padding: 1rem;

  span:first-child {
    color: var(--clr-yellow);
    font-size: 1.7rem;
  }
`;
