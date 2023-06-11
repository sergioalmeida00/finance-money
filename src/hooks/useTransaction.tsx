import { useState } from "react";
import TransactionsService from "../services/TransactionsService";

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

export function useTransactions(){
  const [transactions,setTransactions] = useState([])
  const [summary, setSummary] = useState({} as SummaryBalance )
  const [summaryCategory, setSummaryCategory] = useState([])
  
  async function transactionsList(){
    const resultTransactions = await TransactionsService.getTransactions()
    const summaryBalance = await TransactionsService.getSummaryBalance()
    const summaryCategoryType = await TransactionsService.getSummaryCategory({})

    setSummary(summaryBalance) 
    setTransactions(resultTransactions)
    setSummaryCategory(summaryCategoryType)

  } 

  return {transactions, summary, transactionsList, summaryCategory}
}