import styled from "styled-components";

export const Input = styled.input`
 padding: 1rem;
  width: 100%;
  border-radius: 6px;
  border: none;
  background: ${({ theme }) => theme.gray[900]};
  color:${({ theme }) => theme.gray[300]}; ;
`