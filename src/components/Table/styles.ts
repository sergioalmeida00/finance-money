import styled from "styled-components"

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
    }
  
`