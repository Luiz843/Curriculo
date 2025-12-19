import styled from "styled-components";

export const SectionContainer = styled.section`
    min-height: 100vh;  // cada seção ocupa pelo menos uma tela
    padding: 4rem 2rem;
    background-color: ${props => props.backgroundColor || 'transparent'};
    scroll-margin-top: 5rem;  // compensa a navbar ao fazer scroll

    @media (max-width: 768px) {
        padding: 3rem 1rem;
        min-height: auto;
    }
`

export const SectionTitle = styled.h2`
    color: #ffee32;
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;
    position: relative;

    &::after {
        content: '';
        display: block;
        width: 100px;
        height: 3px;
        background-color: #ffd100;
        margin: 1rem auto;
    }

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`