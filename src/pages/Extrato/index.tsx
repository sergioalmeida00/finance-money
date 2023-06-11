import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useContext } from 'react';
import { AuthContext } from '../../hooks/auth';
import { Container, ContainerCard } from './style';
import { Card } from '../../components/Card';
import { FiArrowDownCircle, FiArrowUpCircle, FiDivideCircle, FiDollarSign, FiTrendingUp } from 'react-icons/fi';
import { Table } from '../../components/Table';
import { Logo } from '../../components/Logo';

export function Extrato(){

  const {summary,transactions, summaryCategory} = useContext(AuthContext)

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="custom-tooltip">
          <p className="label">{`Categoria: ${data.category}`}</p>
          <p className="value">{`Valor: ${data.amount}`}</p>
        </div>
      );
    }
    return null;
  };
  
  console.log(summaryCategory)
    // const data = [summaryCategory];
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
                <YAxis dataKey="category" type="category" />
                <Tooltip content={<CustomTooltip />} />
                {/* <Legend  wrapperStyle={{ marginBottom: '-10px' }} /> */}
                {
                  summaryCategory.map((item,index) => (   
                    <Bar 
                      key={item.category} 
                      dataKey='amount'
                      name={item.category}
                      fill={`#831aa3`} 
                      barSize={1}
                    />
                  ))
                }
              </BarChart>
          </ResponsiveContainer> 

          <Table transactions = {transactions} />
       </Container>
      </>


    )
}
