import { HeaderCard, SummaryCard, SummaryContainer } from "./styles";
import { FiArrowUpCircle,FiArrowDownCircle,FiDollarSign } from 'react-icons/fi';

export function Summary(){
  return(
    <SummaryContainer>
      <SummaryCard>
        <HeaderCard>
          <span>Entradas</span>
          <FiArrowUpCircle  color="#00B37E" size={24}/>
        </HeaderCard>
        <strong>R$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard>
        <HeaderCard>
          <span>Saídas</span>
          <FiArrowDownCircle color="#F75A68" size={24}/>
        </HeaderCard>
        <strong>R$ 1.259,00</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <HeaderCard>
          <span>Total</span>
          <FiDollarSign color="fff" size={24}/>
        </HeaderCard>
        <strong>R$ 16.141,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}