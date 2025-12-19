import styled from "styled-components";


export const NavbarContainer = styled.div`
    position: fixed;
    top: 0;
    left: ${props => props.open ? '21rem' : '4rem'};
    width: calc(100% - ${props => props.open ? '21rem' : '4rem'});
    background-color: #202020;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 3rem;
    z-index: 10;
    padding: 1rem 3rem 1rem 3rem;
    transition: left 0.5s, width 0.5s;

    @media (max-width: 768px) {
        left: ${props => props.open ? '21rem' : '4rem'};
        width: calc(100% - ${props => props.open ? '21rem' : '4rem'});
        padding: 1rem 1.5rem;
        gap: 1.5rem;
    }
`

export const Title = styled.h1`
    color: #ffee32;
    font-size: 1.5rem;
    flex-shrink: 0;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`

export const NavContainer = styled.nav`
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        gap: 1rem;
        font-size: 0.9rem;
    }

    @media (max-width: 480px) {
        flex-direction: column;
    }
`

export const NavLink = styled.a`
    color: #ffffff;
    text-decoration: none;
    font-size: 1rem;
    white-space: nowrap;

    &:hover {
        color: #ffd100;
        transition: color 0.3s;
    }

    @media (max-width: 768px) {
        font-size: 0.85rem;
    }
`