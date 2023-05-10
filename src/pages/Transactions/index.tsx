import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { Price, TransactionContainer, TransactionTable } from "./styles";
import { api } from "../../services/api";
import { formatDate } from "../../utils/formatDate";

interface TransactionsPros{
  id:string
  title:string
  amount:number
  user_id:string
  category_id:string
  release_date:string
  description:string
}

export function Transactions(){
  const [transactions, setTransactions] = useState<TransactionsPros[]>([])

  useEffect(() => {
    async function loadTransactions(){
      try {
        const response = await api.get('/transactions');
        const {transactionsMapDTO} = response.data
        setTransactions(transactionsMapDTO)
      } catch (error) {
        console.log('Error:' ,error)
      }
    }

    loadTransactions()
  },[])
  
  return (
    <>
      <Header/>
      <Summary/>

      <TransactionContainer>
        <TransactionTable>
            <tbody>
              {
                transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td> {transaction.title} </td>
                    <td>
                      <Price 
                        variant={transaction.amount > 0 ? 'income' : 'outcome'}
                      > 
                        R$ { transaction.amount } 
                      </Price>                  
                    </td>
                    <td> { transaction.description } </td>
                    <td> { formatDate(transaction.release_date) } </td>
                  </tr>
                ))
              }            
            </tbody>
        </TransactionTable>
      </TransactionContainer>

    </>
  )
}