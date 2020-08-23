import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--clr-red);
  padding: 1rem;
  min-width: 156px;

  span:first-child {
    color: var(--clr-red);
    font-size: 1.7rem;
  }

  span:last-child {
    font-size: 0.95rem;
    margin-top: 5px;
  }
`;
