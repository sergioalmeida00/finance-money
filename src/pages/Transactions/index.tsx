import { useContext, useEffect } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import {  Price, TransactionContainer, TransactionTable } from "./styles";
import { formatDate } from "../../utils/formatDate";
import { AuthContext } from "../../hooks/auth";
import { formatPrice } from "../../utils/formatPrice";


export function Transactions(){

  const {transactions,transactionsList} = useContext(AuthContext)

  useEffect( () => {
    transactionsList()
  }, [])

  
  return (
    <>
      <Header/>
      <Summary/>

      <TransactionContainer>
        <TransactionTable>
            <tbody>
              {
                transactions.map((transaction) => (
                  <tr key={transaction.id }>
                    <td> {transaction.title} </td>
                    <td>
                      <Price 
                        variant={transaction.amount > 0 ? 'income' : 'outcome'}
                      > 
                        { formatPrice(transaction.amount) } 
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