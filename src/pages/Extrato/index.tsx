import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip,  ResponsiveContainer } from 'recharts';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../hooks/auth';
import { Container, ContainerCard, ContainerHeader, NewTransactionButton } from './style';
import { Card } from '../../components/Card';
import { FiArrowDownCircle, FiArrowUpCircle, FiDivideCircle, FiDollarSign, FiTrendingUp } from 'react-icons/fi';
import { Table } from '../../components/Table';
import { Logo } from '../../components/Logo';
import { Modal } from '../../components/Modal';

export function Extrato(){
  const[openModal,setOpenModal] = useState(false)

  const {summary,transactions, summaryCategory, transactionsList} = useContext(AuthContext)
  
  function handleToggleModal(){
    setOpenModal((prevState) => !prevState)
  }

  useEffect(()=>{
    transactionsList()
  },[])
  
    return(
      <>
        {
          openModal && <Modal handleToggleModal={handleToggleModal}/>
        }
        <ContainerHeader>
          <Logo/>

          <NewTransactionButton onClick={handleToggleModal} >
            Nova Transação
          </NewTransactionButton>
        </ContainerHeader>

        <Container>   
          <ContainerCard>
            <Card
              price={summary.totalIncome} 
              title='Entrada' 
              icon={<FiArrowUpCircle  color="#00B37E" size={24}/>}
             />
            <Card 
              price={summary.totalExpense} 
              title='Saidas'
              icon={<FiArrowDownCircle  color="#F75A68" size={24}/>}
            />
            <Card 
              price={summary.daySummary} 
              title='Disponivel por dia' 
              icon={<FiDivideCircle  color="#00B37E" size={24}/>}
            />
            <Card 
              price={summary.weekSummary} 
              title='Disponivel por Semana' 
              icon={<FiDivideCircle  color="#00B37E" size={24}/>}
            />
            <Card 
              price={summary.invested} 
              title='Reserva de Emergencia' 
              icon={<FiTrendingUp  color="#00B37E" size={24}/>}
            />
            <Card 
              price={summary.totalBalance} 
              title='Saldo' 
              icon={<FiDollarSign  color="#fff" size={24}/>}
              variant='green'
            />
          </ContainerCard>
          
          <ResponsiveContainer width="100%" height="100%">
              <BarChart
               layout="vertical" 
                width={500}
                height={300}
                data={summaryCategory}
                barSize={30}
                margin={{
                  top: 0,
                  right: 30,
                  left: 20,
                  bottom: 20,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis 
                  dataKey="category" 
                  type="category" 
                  width={80} 
                  interval={0}
                />
                <Tooltip />
                   <Bar 
                      dataKey='amount'
                      fill={`#00B37E`} 
                      barSize={10}
                    />
              </BarChart>
          </ResponsiveContainer> 

          <Table transactions = {transactions} />
       </Container>
      </>


    )
}
