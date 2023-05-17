import styled from "styled-components";


export const TransactionContainer = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
    @media (max-width: 768px){
        overflow-x: auto;
    }

`

export const TransactionTable = styled.table`
  
  width: 100%;
  border-collapse: separate;
  border-spacing:0 0.5rem;
  /* margin-top: 1.5rem; */

  td{
    padding: 1.25rem 2rem;
    background: ${({ theme }) => theme.gray[700]};    

    &:first-child{
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child{
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }    
  }
`
interface PriceProps{
  variant: 'income' | 'outcome'
}
export const Price = styled.span<PriceProps>`
  color: ${({ theme,variant }) => variant === 'income' ? theme.green[300] : theme.red[300]};
`