import { createContext, useEffect } from "react";
import { useAuth } from "./useAuth";
import { useTransactions } from "./useTransaction";

interface AuthProviderProps {
    children: React.ReactNode;
}

interface SignInProps{
    login:string
    password:string
}
interface TransactionsPros{
    id:string
    title:string
    amount:number
    user_id:string
    category_id:string
    release_date:string
    description:string
  }

  interface SummaryBalance{
    totalIncome:number
    totalExpense: number
    totalBalance:number
    weekSummary:number
    daySummary:number
    emergencyReserve:number
    invested:number
    total:number
  }
  interface SummaryCategoryProps {
    category: string;
    amount: number;
  }
interface AuthSignProps{
    signIn: ({login,password}:SignInProps) => void
    auth:string
    transactions:TransactionsPros[]
    transactionsList: () => void
    summary:SummaryBalance 
    summaryCategory: SummaryCategoryProps[]
}


export const AuthContext = createContext({} as AuthSignProps)

function AuthProvider({ children }:AuthProviderProps){

    const {signIn,auth} = useAuth()
    const {transactions, transactionsList, summary, summaryCategory} = useTransactions()
    
    
    return(
        <AuthContext.Provider value={{ signIn, auth, transactions, transactionsList, summary, summaryCategory }}>
            { children }
        </AuthContext.Provider>
    )
}

export {AuthProvider}