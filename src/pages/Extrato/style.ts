import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* grid-template-rows: repeat(2, 1fr); */
    gap: 1rem;
    margin-top: 2.5rem;

`

export const ContainerCard = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
`

export const Grafico = styled.div`
    width: 100%;
`