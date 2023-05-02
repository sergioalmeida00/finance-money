import { useState } from "react";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import { Modal } from "../Modal";

export function Header(){

  const[openModal,setOpenModal] = useState(false)

  function handleToggleModal(){
    setOpenModal((prevState) => !prevState)
  }

  return (
    <HeaderContainer>
      {
        openModal && <Modal handleToggleModal={handleToggleModal}/>
      }
      <HeaderContent>
        <strong>
          Finance
          <span>Money</span>
        </strong>
        <NewTransactionButton onClick={handleToggleModal}>
          Nova transação
        </NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}