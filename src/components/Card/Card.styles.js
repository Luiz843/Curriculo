import styled from "styled-components";


export const CardContainer = styled.div`
    background-color: #202020;
    border: 2px solid transparent;
    border-radius: 10px;
    padding: 2rem;
    text-align: center;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
        border-color: #ffd100;
        transform: translateY(-10px);
    }
`

export const CardIcon = styled.div`
    font-size: 3rem;
    color: #ffd100;
    margin-bottom: 1rem;
`

export const CardTitle = styled.h3`
    color: #ffee32;
    font-size: 1.5rem;
    margin-bottom: 1rem;
`

export const CardDescription = styled.p`
    color: #ffffff;
    font-size: 1rem;
    line-height: 1.6;
`