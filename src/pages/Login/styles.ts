import styled from "styled-components";

export const ContainerLogin = styled.section`
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`

export const Content = styled.div`
   width: 100%;
   max-width: 32rem;
   background-color: ${({theme}) => theme.gray[700]};
   padding: 1rem;
   border-radius: 6px;

   >strong{
    display: block;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    span{
      color: ${({ theme }) => theme.green[500]};
    }
  }

   >form{
    display: flex;
    flex-direction: column;
    gap: 1rem;

    >button{
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
    }
   }
   

`