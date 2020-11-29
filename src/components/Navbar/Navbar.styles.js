import styled from 'styled-components/macro';

export const Nav = styled.nav`
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 5fr 1fr;
  column-gap: 1.5rem;
  font-size: 16px;
  background-color: #2c3e50;
  color: var(--clr-white);
  padding: 10px 20px;

  a {
    font-size: 20px;
    font-weight: 400;
    font-family: 'Pacifico', cursive;
    text-decoration: none;
    color: var(--clr-white);
  }
`;

export const Search = styled.div`
  font-size: 15px;
  width: 40vw;
`;

export const Icon = styled.div`
  color: ${props =>
    props.variant === 'healthy'
      ? 'mediumseagreen'
      : props.variant === 'warning'
      ? 'orange'
      : 'palevioletred'};
  cursor: pointer;
`;
