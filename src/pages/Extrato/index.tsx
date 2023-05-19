import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../hooks/auth';

export function Extrato(){

  const {summary,transactionsList} = useContext(AuthContext)

  useEffect( () => {
    transactionsList()
  }, [])
    const data = [summary];
   
    return(
        <ResponsiveContainer width="50%" height="40%">
          <BarChart
            width={500}
            height={700}
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
    )
}
