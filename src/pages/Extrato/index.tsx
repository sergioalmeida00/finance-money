import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useContext } from 'react';
import { AuthContext } from '../../hooks/auth';
import { Container, ContainerCard } from './style';
import { Card } from '../../components/Card';
import { FiArrowDownCircle, FiArrowUpCircle, FiDivideCircle, FiDollarSign, FiTrendingUp } from 'react-icons/fi';
import { Table } from '../../components/Table';
import { Logo } from '../../components/Logo';

export function Extrato(){

  const {summary,transactions} = useContext(AuthContext)
  


  console.log('renderizou extrato')

    const data = [summary];
    return(
      <>
        <Logo/>
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
          
          <ResponsiveContainer width="100%">
              <BarChart
                width={500}
                height={300}
                data={data}
                barSize={30}
                margin={{
                  top: 0,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis />
                <Tooltip />
                <Legend  wrapperStyle={{ marginBottom: '-10px' }} />
                <Bar dataKey="emergencyReserve" fill="#463cdb"  />
                <Bar dataKey="totalIncome" fill="#8884d8"  />
                <Bar dataKey="totalExpense" fill="#e78223" />
                <Bar dataKey="weekSummary" fill="#8295ca" />
                <Bar dataKey="invested" fill="#36b8bd" />
                <Bar dataKey="daySummary" fill="#c062c0" />
                <Bar dataKey="totalBalance" fill="#82ca9d" />            
              </BarChart>
          </ResponsiveContainer> 

          <Table transactions = {transactions} />
       </Container>
      </>


    )
}
