import styled from "styled-components"

export const ContainerMain = styled.div`
 width: 100%;
 height: 400px;
 overflow: auto;
`
export const Container = styled.table`
    /* display: grid; */
    width: 100%;
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9rem;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    grid-column: span 2;



    thead{
        background-color: ${({ theme }) => theme.green[500]};
        text-align: left;
    }
  

    th,td{
        padding: 12px 15px;
        &:first-child{
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
        }

        &:last-child{
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
        }   
    }
    
    tbody tr{
        border-bottom: 1px solid ${({ theme }) => theme.gray[600]};
        color: ${({ theme }) => theme.gray[100]};
    }
  
`
interface PriceProps{
    variant: 'income' | 'outcome'
  }


export const ContainerType = styled.span<PriceProps>`
    padding: 0.3rem;
    border-radius: 4px;
    font-size: 0.6rem;
    font-weight: bold;
    background: ${({ theme, variant }) => variant === 'income' ? theme.green[700] : theme.red[300]};
`