import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  min-width: 12rem;

  span:first-child {
    color: var(--clr-text-blue);
    font-size: 2.72rem;
  }

  span:last-child {
    font-size: 1.52rem;
    margin-top: 5px;
    color: var(--clr-bg-blue);
  }
`;
