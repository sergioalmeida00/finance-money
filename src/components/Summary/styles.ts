import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  margin-top: -4rem;

  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 2rem;


`

interface SummaryCardProps{
  variant ?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${({ theme }) => theme.gray[600]};
  padding: 1.5rem  2rem;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  >strong{
    font-size: 2rem;
  }

  ${({ theme,variant  }) => variant === 'green' && css`
    background: ${theme.green[700]}
  `}
`
export const HeaderCard = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span{
    color: ${({ theme }) => theme.gray[300]};
  }
  /* svg {
    color: ${({ theme }) => theme.green[300]};
    font-size: 1.2rem;
  } */
`