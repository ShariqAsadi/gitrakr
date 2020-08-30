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
    font-size: 2.72rem;
  }

  span:last-child {
    font-size: 1.52rem;
    margin-top: 5px;
  }
`;
