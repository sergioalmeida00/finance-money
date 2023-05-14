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
  
  async function transactionsList(){
    const resultTransactions = await TransactionsService.getTransactions()
    const summaryBalance = await TransactionsService.getSummaryBalance()
    setSummary(summaryBalance) 
    setTransactions(resultTransactions)   
  } 

  return {transactions, summary, transactionsList}
}