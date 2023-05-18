import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 1rem 0;
    background: ${({ theme }) => theme.gray[700]};

    
    a{  
        display: flex;
        gap: 0.5rem;
        text-decoration: none;
        color: ${({theme}) => theme.gray[300]} ;
        font-weight: bold;        
        padding: 1rem;
        border-bottom: 1px solid ${({theme}) => theme.gray[800]};

        li{
            list-style: none;
        }

        &:hover{
            color: ${({ theme }) => theme.green[500]};
            border-left: 2px solid ${({ theme }) => theme.green[500]};
        }
        
    }
`