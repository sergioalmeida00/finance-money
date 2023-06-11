import { api } from "./api"

interface TransactionsPros{
    title:string
    amount:number,
    type: 'credit' | 'debit'
    categoryId:string
    releaseDate:string
}

interface ListTransactionsPros{
    id:string
    title:string
    amount:number
    user_id:string
    category_id:string
    release_date:string
    description:string
  }

interface DateTransactionsProps{
    startDate?:string,
    endDate?:string
}

class TransactionsService{
   async createTransactions({title,amount,type,categoryId,releaseDate}:TransactionsPros){
        await api.post('/transactions', {
            title,
            amount,
            type,
            categoryId,
            releaseDate
        })
    }

    async loadCategories(){
        const response = await api.get('/category')
        const { listCategories } = response.data        

        return listCategories
    }

    async getTransactions(){
        const response = await api.get('/transactions');
        const {transactionsMapDTO} = response.data

        return transactionsMapDTO
    }

    async getSummaryBalance(){
        const response = await api.get('/transactions/summary/balance')
        const { summaryBalance } = response.data

        return summaryBalance

    }

    async getSummaryCategory({startDate = '', endDate = ''}:DateTransactionsProps){
        const response = await api.get(`/transactions/summary/type?startDate=${startDate}&endDate=${endDate}`)
        return response.data.summaryTypeCategory
    }
}

export default new TransactionsService()