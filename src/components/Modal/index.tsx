import { Button, ModalContainer, ModalContent, ModalInput, ModalOverlay, ModalSelect } from "./styles";
import { FiXCircle } from 'react-icons/fi';
import ReactDOM from 'react-dom';
import {  useContext, useEffect, useState } from "react";
import TransactionsService from "../../services/TransactionsService";
import { AuthContext } from "../../hooks/auth";


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


  async function loadCategories(){
    const listCategories  = await TransactionsService.loadCategories()
    setCategories(listCategories)
  }

  function handleChangeTitle(event: React.ChangeEvent<HTMLInputElement>){
    setTitle( event.target.value )
  }

  function handleChangeAmount(event: React.ChangeEvent<HTMLInputElement>){
    setAmount( event.target.value )
  }

  function handleChangeReleaseDate(event: React.ChangeEvent<HTMLInputElement>){
    setReleaseDate(event.target.value)
  }

  function handleChangeCategory(event: React.ChangeEvent<HTMLSelectElement>){
    setCategory( event.target.value )
  }

  function handleChangeTypeTransaction (event: React.ChangeEvent<HTMLSelectElement>){
    setTypeTransaction( event.target.value as Pick<CategoriesProps, 'typeTransaction'> )
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
          <ModalInput placeholder="Descrição" onChange={handleChangeTitle}  value={title}/>
          <ModalInput placeholder="Preço" type="number" onChange={handleChangeAmount} value={amount} />
          <ModalInput type="date" onChange={handleChangeReleaseDate} />
          <ModalSelect onChange={handleChangeCategory}>
            <option>Selecione a Categoria</option>
            {
              categories.map((category) => (
                <option key={category.id} value={ category.id }>
                   { category.description }
                 </option>           
              ))
            }         
          </ModalSelect>

          <ModalSelect onChange={handleChangeTypeTransaction}>
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