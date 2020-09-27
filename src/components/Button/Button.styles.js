import styled from 'styled-components/macro';

export const Container = styled.button`
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 10px;
  background: var(--clr-placeholder-blue);
  cursor: pointer;
  font-family: inherit;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.7rem;
  color: var(--clr-white);
  transition: all 0.3s ease-in-out;
  box-shadow: 3px 3px 5px var(--clr-bg-blue);
  :hover {
    box-shadow: 5px 5px 10px var(--clr-bg-blue);
    background: var(--clr-text-blue);
  }
`;
