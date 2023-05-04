import { Button, ModalContainer, ModalContent, ModalInput, ModalOverlay, ModalSelect } from "./styles";
import { FiXCircle } from 'react-icons/fi';
import ReactDOM from 'react-dom';

interface ModalPorps{
  handleToggleModal: (statusModal:boolean) => void
  isOpenModal: boolean
}
export function Modal({handleToggleModal, isOpenModal}:ModalPorps){

  if(!isOpenModal){
    return null
  }
  return ReactDOM.createPortal(
    <ModalOverlay>
      <ModalContainer>
        <h3>Nova Transação</h3>
        <button onClick={() => handleToggleModal(false)}>
           <FiXCircle size={22} /> 
        </button>
        <ModalContent>
          <ModalInput placeholder="Descrição"/>
          <ModalInput placeholder="Preço"/>
          <ModalSelect>
            <option>Selecione a Categoria</option>
            <option value="casa">Casa</option>
            <option value="carro">Carro</option>
            <option value="alimentacao">Alimentação</option>
          </ModalSelect>

          <ModalSelect>
            <option>Tipo de Movimentação</option>
            <option value="credit">Credito</option>
            <option value="debit">Debito</option>
          </ModalSelect>
          <Button>Cadastrar</Button>
        </ModalContent>
        
      </ModalContainer>
    </ModalOverlay>,  document.getElementById('modal-root') as HTMLDivElement,
  )
}