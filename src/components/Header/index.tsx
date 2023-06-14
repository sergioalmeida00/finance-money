import { useState } from "react";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import { Modal } from "../Modal";
import { Logo } from "../Logo";

export function Header(){

  // const[openModal,setOpenModal] = useState(false)

  // function handleToggleModal(){
  //   setOpenModal((prevState) => !prevState)
  // }

  return (
    <HeaderContainer>
      {/* {
        openModal && <Modal handleToggleModal={handleToggleModal}/>
      } */}
      <HeaderContent>  
        <Logo/>
        <NewTransactionButton >
          Nova transação
        </NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}