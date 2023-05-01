import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

export function Header(){
  return (
    <HeaderContainer>
      <HeaderContent>
        <strong>
          Finance
          <span>Money</span>
        </strong>
        <NewTransactionButton>
          Nova transação
        </NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}