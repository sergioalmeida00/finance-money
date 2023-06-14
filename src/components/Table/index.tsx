import { formatDate } from "../../utils/formatDate";
import { formatPrice } from "../../utils/formatPrice";
import { Container, ContainerMain, ContainerType } from "./styles";
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
                    <th>Tipo</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody>
                {
                    transactions.map(( transaction ) => (
                        <tr 
                            key={ transaction.id } 
                        >
                            <td> { transaction.title } </td>
                            <td> { formatPrice(transaction.amount) } </td>
                            <td>
                                 <ContainerType 
                                    variant={transaction.amount > 0 ? 'income' : 'outcome'}
                                 >
                                     { transaction.amount > 0 ? 'RECEITA' : 'DESPESA' }
                                 </ContainerType>                                 
                             </td>
                            <td> { transaction.description } </td>
                            <td> { formatDate(transaction.release_date) } </td>

                        </tr>               
                    ))
                }
                
            </tbody>
        </Container>
    )
}