import { Button, ModalContainer, ModalContent, ModalInput, ModalOverlay, ModalSelect } from "./styles";
import { FiXCircle } from 'react-icons/fi';
import ReactDOM from 'react-dom';
import {  useContext, useEffect, useState } from "react";
import TransactionsService from "../../services/TransactionsService";
import { AuthContext } from "../../hooks/auth";
import { SetStateAction, Dispatch } from "react";


interface ModalProps{
  handleToggleModal: (statusModal:boolean) => void
}

interface CategoriesProps{
  id:string
  description:string
  typeTransaction?: 'credit' | 'debit'
}


export function Modal({handleToggleModal}:ModalProps){
  const [categories, setCategories] = useState<CategoriesProps[]>([])
  const [category, setCategory] = useState('')
  const [title,setTitle] = useState('')
  const [amount,setAmount] = useState('')
  const [releaseDate,setReleaseDate] = useState('')
  const [typeTransaction, setTypeTransaction] = useState<Pick<CategoriesProps,'typeTransaction'>>()

  const{ transactionsList } = useContext(AuthContext)

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement >, setState:Dispatch<SetStateAction<string>>){
    setState(event.target.value)
  }

  async function loadCategories(){
    const listCategories  = await TransactionsService.loadCategories()
    setCategories(listCategories)
  }

  async function handleSubmit(event:  React.FormEvent<HTMLFormElement>){
    event.preventDefault();

    await TransactionsService.createTransactions({
      title,
      amount:Number(amount),
      type:typeTransaction,
      categoryId:category,
      releaseDate
    }) 

    transactionsList()
  }

  useEffect(() => { 

    loadCategories()

  }, [])

  return ReactDOM.createPortal(
    <ModalOverlay>
      <ModalContainer>
        <h3>Nova Transação</h3>
        <button onClick={() => handleToggleModal(false)}>
           <FiXCircle size={22} /> 
        </button>
        <ModalContent onSubmit={handleSubmit}>
          <ModalInput placeholder="Descrição" onChange={(event) => {handleChange(event,setTitle )}}  value={title}/>
          <ModalInput placeholder="Preço" type="number" onChange={(event) => {handleChange(event,setAmount )}}  value={amount} />
          <ModalInput type="date" onChange={(event) => {handleChange(event,setReleaseDate )}}  />
          <ModalSelect onChange={(event) => {handleChange( event,setCategory )}} >
            <option>Selecione a Categoria</option>
            {
              categories.map((category) => (
                <option key={category.id} value={ category.id }>
                   { category.description }
                 </option>           
              ))
            }         
          </ModalSelect>

          <ModalSelect onChange={(event) => {handleChange(event,setTypeTransaction )}} >
            <option>Tipo de Movimentação</option>
            <option value="credit">Credito</option>
            <option value="debit">Debito</option>
          </ModalSelect>
          <Button> Cadastrar </Button>
        </ModalContent>
        
      </ModalContainer>
    </ModalOverlay>,  document.getElementById('modal-root') as HTMLDivElement,
  )
}