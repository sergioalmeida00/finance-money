import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.gray[900]};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  /* max-width: 70rem; */
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  >strong{
    font-size: 1.5rem;
    span{
      color: ${({ theme }) => theme.green[500]};
    }
  }

`

export const NewTransactionButton = styled.button`
  padding: 0.75rem 1.25rem;
  border-radius: 6px;
  border: none;
  background: ${({ theme }) => theme.green[500]};
  color: ${({ theme }) => theme.white};
  font-weight: bold;
  transition: filter 0.2s ease-in;

  &:hover{
    filter: brightness(0.8);
  }
`