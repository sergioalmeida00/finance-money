import styled, { css } from "styled-components";

export const ModalOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3.5px);
  position: fixed;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
`

export const ModalContainer = styled.div`
  width: 100%;
  max-width: 33rem;
  background: ${({ theme }) => theme.gray[800]};
  padding: 3rem;
  border-radius: 6px;
  position: relative;

  >button{
    position: absolute;
    top: 2rem;
    right: 3rem;
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.gray[500]};
    transition: filter 0.2s ease-in;

    &:hover{
      filter: brightness(0.8);
    }

  }
  
`

export const ModalContent = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;

  >small{
    margin-top: -0.8rem;
    color: ${({ theme }) => theme.red[500]};
    font-weight: bold;
  }
`
interface ModalInputErro{
  error?:boolean
}
export const ModalInput = styled.input<ModalInputErro>`
  padding: 1rem;
  width: 100%;
  border-radius: 6px;
  border: none;
  background: ${({ theme }) => theme.gray[900]};
  color: ${({ theme }) => theme.gray[500]};
  ${({theme,error}) => error && css`
    border: 1px solid ${theme.red[500]};
  `}
`

export const ModalSelect = styled.select`
  padding: 1rem;
  width: 100%;
  border-radius: 6px;
  border: none;
  color:${({ theme }) => theme.gray[500]}; ;
  background: ${({ theme }) => theme.gray[900]};
`


export const Button = styled.button`
 
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
  &[disabled]{
    cursor: not-allowed;
    opacity: 0.2;
  }
`

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`
interface ButtonProps{
  isActive?:boolean
  typeTransaction:'credit' | 'debit'
}

export const RadioBox = styled.button<ButtonProps>`
  height: 4rem;
  border: 1px solid ${({ theme }) => theme.gray[600]};
  border-radius: 4px;

  background: ${({ theme,isActive,typeTransaction }) => 
    (isActive && typeTransaction === 'credit') ?'rgba(0, 179, 126, 0.3)' :
    (isActive && typeTransaction === 'debit') ? 'rgba(229, 46, 77, 0.3)' : 'transparent'};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  transition:  border-color ease-in 0.3s;

  &:hover{
    border-color: ${({ theme }) => theme.gray[500]};
  }

  >span{
    color: ${({ theme }) => theme.gray[300]};
  }

  >svg{
    color: ${({ theme }) => theme.gray[300]};
  }
`