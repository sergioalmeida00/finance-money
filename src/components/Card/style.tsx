import styled, { css } from "styled-components";

interface VariantCardProps{
    variant ?: 'green'
  }

export const CardContainer = styled.div<VariantCardProps>`
  background: ${({ theme }) => theme.gray[600]};
  padding: 1.5rem  1.2rem;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  >strong{
    font-size: 1.6rem;
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

`
