import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { Price, TransactionContainer, TransactionTable } from "./styles";

export function Transactions(){
  return (
    <>
      <Header/>
      <Summary/>

      <TransactionContainer>
        <TransactionTable>
            <tbody>
              <tr>
                <td>Desenvolvimento de site</td>
                <td>
                  <Price variant="income"> R$ 12.000,00 </Price>                  
                </td>
                <td>Venda</td>
                <td>13/04/2022</td>
              </tr>
              <tr>
                <td>Aluguel do apartamento</td>
                <td>
                  <Price variant="outcome"> - R$ 1.200,00 </Price>                  
                </td>
                <td>Casa</td>
                <td>13/04/2022</td>
              </tr>
            </tbody>
        </TransactionTable>
      </TransactionContainer>

    </>
  )
}