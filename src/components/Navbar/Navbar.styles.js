import styled from 'styled-components/macro';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 16px;
  background-color: #000;
  color: var(--clr-white);
  justify-content: space-between;
  padding: 10px 40px;

  a {
    font-size: 20px;
    font-weight: 400;
    font-family: 'Pacifico', cursive;
    text-decoration: none;
    color: var(--clr-white);
  }
`;

export const Search = styled.div`
  width: 300px;
  @media (max-width: 550px) {
    width: 150px;
    font-size: 15px;
  }
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
