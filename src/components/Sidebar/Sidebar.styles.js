import styled from "styled-components";

// Sidebar container styles
export const SideBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    height: 100%;
    width: ${props => props.open ? '20rem' : '2rem'};
    background-color: #202020;
    justify-content: flex-start;
    padding: 0 1rem;
    transition: width .5s;
    z-index: 3;
`

// Individual sidebar item styles
export const DivSideBar = styled.div`
    cursor: pointer;
    height: 3rem;
    margin-bottom: 3rem;
`

export const IconSideBar = styled.div`
    margin-top: 2rem;
    width: 30px;
    height: 2.5px;
    background-color: #ffd100;
    border-radius: 100px;

    &::after, &::before {
        content: '';
        border-radius: 100px;
        position: absolute;
        width: 30px;
        height: 2.5px;
        background-color: #ffd100;
    }

    &::after {
        transform: translateY(-10px);
    }

    &::before {
        transform: translateY(10px);
    }
`


export const IconSideBarClose = styled.div`
    margin-top: 2rem;
    width: 30px;
    height: 2.5px;
    background-color: #ffd100;
    border-radius: 100px;
    transform: rotate(45deg);

    &::before{
        content: '';
        border-radius: 100px;
        position: absolute;
        width: 30px;
        height: 2.5px;
        background-color: #ffd100;
        transform: rotate(90deg);
    }
`

export const BlackDiv = styled.div`
    background-color: #000000a4;
    position: absolute;
    top: 0;
    left: 0;
    width: ${props => props.open ? '100vw' : '0'};
    height: 100vh;
    z-index: 2;
    cursor: pointer;
    transition: width .2s;
`

export const NameTitle = styled.div`
    cursor: default;
    text-align: center;
    margin-top: 3rem;

    h1 {
        color: #ffee32;
        opacity: ${props => props.open ? "1" : "0"};
        font-size: 2rem;
        margin-bottom: 1rem;
        margin-top: 1rem;
    }
    p {
        color: #ffee32;
        opacity: ${props => props.open ? "1" : "0"};
        margin-bottom: 1.3rem;
    }
`

