import { useContext } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { Price, TransactionContainer, TransactionTable } from "./styles";
import { formatDate } from "../../utils/formatDate";
import { AuthContext } from "../../hooks/auth";


export function Transactions(){

  const {transactions} = useContext(AuthContext)

 
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