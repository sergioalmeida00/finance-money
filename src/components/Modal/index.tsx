import { Button, ModalContainer, ModalContent, ModalInput, ModalOverlay, ModalSelect } from "./styles";
import { FiXCircle } from 'react-icons/fi';
import ReactDOM from 'react-dom';
import {  useContext, useEffect, useState } from "react";
import TransactionsService from "../../services/TransactionsService";
import { AuthContext } from "../../hooks/auth";
import { SetStateAction, Dispatch } from "react";
import { useErrors } from "../../hooks/useErrors";


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
  const { errors,getErrorMessageByFieldName,removeError,setError} = useErrors()

  const isValid = (!category.trim() || !title.trim() || !amount || !releaseDate || !typeTransaction) 

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement >, setState:Dispatch<SetStateAction<string>>){
    setState(event.target.value)
    
    if(!event.target.value){
      setError({field: event.target.name })
    }else{
      removeError( event.target.name )
    }
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
          <ModalInput 
            name="title"
            placeholder="Descrição" 
            onChange={(event) => {handleChange(event,setTitle )}}  
            value={title}
          />
          { errors && <small> { getErrorMessageByFieldName('title') } </small> }

          <ModalInput 
            name="amount"
            placeholder="Preço" 
            type="number" 
            onChange={(event) => {handleChange(event,setAmount )}}  
            value={amount} 
          />
          { errors && <small> { getErrorMessageByFieldName('amount') } </small> }

          <ModalInput 
            name="date"
            type="date" 
            onChange={(event) => {handleChange(event,setReleaseDate )}}  
          />
          { errors && <small> { getErrorMessageByFieldName('date') } </small> }

          <ModalSelect name="category" onChange={(event) => {handleChange( event,setCategory )}} >
            <option value="" >Selecione a Categoria</option>
            {
              categories.map((category) => (
                <option key={category.id} value={ category.id }>
                   { category.description }
                 </option>           
              ))
            }         
          </ModalSelect>
          { errors && <small> { getErrorMessageByFieldName('category') } </small> }

          <ModalSelect name="type" onChange={(event) => {handleChange(event,setTypeTransaction )}} >
            <option value="">Tipo de Movimentação</option>
            <option value="credit">Credito</option>
            <option value="debit">Debito</option>
          </ModalSelect>          
          { errors && <small> { getErrorMessageByFieldName('type') } </small> }
         
          <Button disabled={isValid}> Cadastrar </Button>
        </ModalContent>
        
      </ModalContainer>
    </ModalOverlay>,  document.getElementById('modal-root') as HTMLDivElement,
  )
}