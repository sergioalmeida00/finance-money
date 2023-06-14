import { formatDate } from "../../utils/formatDate";
import { formatPrice } from "../../utils/formatPrice";
import { Container, ContainerMain, ContainerTr } from "./styles";
interface TableProps{
    transactions:{
        id:string
        title:string
        amount:number
        user_id:string
        category_id:string
        release_date:string
        description:string
    }[]
}
export function Table ({transactions}:TableProps){
    return (
 
        <Container>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody>
                {
                    transactions.map(( transaction ) => (
                        <ContainerTr 
                            key={ transaction.id } 
                            variant={transaction.amount > 0 ? 'income' : 'outcome'}
                        >
                            <td> { transaction.title } </td>
                            <td> { formatPrice(transaction.amount) } </td>
                            <td> { transaction.description } </td>
                            <td> { formatDate(transaction.release_date) } </td>
                        </ContainerTr>               
                    ))
                }
                
            </tbody>
        </Container>
    )
}