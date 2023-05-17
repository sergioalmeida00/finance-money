import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 250px;
    height: 100vh;
    position: fixed;
    background: ${({ theme }) => theme.gray[400]};
`