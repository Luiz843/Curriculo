import styled from "styled-components";


export const MainContainer = styled.div`
    background-color: #333533;
`

export const MainContent = styled.main`
    margin-left: ${props => props.open ? '20rem' : '2rem'};
    margin-top: 4rem;  // espaço para a navbar fixa
    width: calc(100% - ${props => props.open ? '20rem' : '2rem'});
    background-color: #333533;  // ou outra cor de fundo
    min-height: 100vh;
    padding: 2rem;
    transition: margin-left 0.5s, width 0.5s;

    @media (max-width: 768px) {
        margin-left: ${props => props.open ? '20rem' : '2rem'};
        padding: 1rem;
    }
`
