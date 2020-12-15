import styled from 'styled-components/macro';

export const Nav = styled.nav`
  display: flex;
  padding-top: 5px;
`;

export const Search = styled.div`
  font-size: 15px;
  width: 100%;
`;

export const Form = styled.form`
  width: 90vw;
  display: flex;
  min-width: 250px;
  max-width: 1170px;
  margin: 0 auto;
`;

export const IconContainer = styled.div`
  background-color: #34495e;
  border: 1px solid var(--clr-text-blue);
  border-left: initial;
  padding: 0 15px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
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
