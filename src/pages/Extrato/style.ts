import styled from "styled-components";

export const ContainerHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Container = styled.main`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* grid-template-rows: repeat(2, 1fr); */
    gap: 1rem;
    margin-top: 2.5rem;

`

export const ContainerCard = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
`

// export const Grafico = styled.div`
//     width: 100%;
// `

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