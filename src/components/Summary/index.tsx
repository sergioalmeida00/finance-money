import { useContext } from "react";
import { HeaderCard, SummaryCard, SummaryContainer } from "./styles";
import { FiArrowUpCircle,FiArrowDownCircle,FiDollarSign } from 'react-icons/fi';
import { AuthContext } from "../../hooks/auth";

export function Summary(){

const { summary } = useContext(AuthContext)
  return(
    <SummaryContainer>
      <SummaryCard>
        <HeaderCard>
          <span>Entradas</span>
          <FiArrowUpCircle  color="#00B37E" size={24}/>
        </HeaderCard>
        <strong>R$ { summary.totalIncome }</strong>
      </SummaryCard>

      <SummaryCard>
        <HeaderCard>
          <span>Saídas</span>
          <FiArrowDownCircle color="#F75A68" size={24}/>
        </HeaderCard>
        <strong>R$ { summary.totalExpense } </strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <HeaderCard>
          <span>Total</span>
          <FiDollarSign color="fff" size={24}/>
        </HeaderCard>
        <strong>R$ { summary.totalBalance } </strong>
      </SummaryCard>
    </SummaryContainer>
  )
}