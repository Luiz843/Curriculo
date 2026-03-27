/**
 * @file Sidebar.styles.js
 * @description Styled-components da Sidebar: container retrátil, ícones de
 *              hamburguer/fechar, overlay escuro e cabeçalho com nome/cargo.
 *              Mobile (≤768px): sidebar desliza do lado esquerdo (off-canvas).
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 1.0.0
 */

import styled from "styled-components";

/* ── Container principal ─────────────────────────────────────────── */

export const SideBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: ${props => props.open ? '20rem' : '3rem'};
    background-color: #202020;
    justify-content: flex-start;
    padding: 0 1rem;
    transition: width 0.5s;
    z-index: 3;
    overflow: hidden;

    /* ── Tablet (≤768px) ──────────────────────────────────── */
    @media (max-width: 768px) {
        width: ${props => props.open ? '80vw' : '0'};
        max-width: 20rem;
        transform: ${props => props.open ? 'translateX(0)' : 'translateX(-100%)'};
        transition: transform 0.35s ease, width 0.35s ease;
        padding: ${props => props.open ? '0 1rem' : '0'};
        box-shadow: ${props => props.open ? '4px 0 24px rgba(0,0,0,0.5)' : 'none'};
    }

    /* ── Mobile pequeno (≤480px) ──────────────────────────── */
    @media (max-width: 480px) {
        width: ${props => props.open ? '85vw' : '0'};
    }
`;

/* ── Botão de toggle (visível no desktop) ────────────────────────── */

export const DivSideBar = styled.button`
    cursor: pointer;
    height: 3rem;
    margin-bottom: 3rem;
    background: none;
    border: none;
    padding: 0;
    display: flex;
    align-items: center;

    /* No mobile o Navbar já fornece o botão hamburguer para abrir */
    @media (max-width: 768px) {
        /* Só mostra quando a sidebar está aberta (serve de botão fechar) */
        display: ${props => props.open ? 'flex' : 'none'};
    }

    &:focus-visible {
        outline: 2px solid #ffd100;
        outline-offset: 4px;
        border-radius: 4px;
    }
`;

/* ── Ícone hamburguer ────────────────────────────────────────────── */

export const IconSideBar = styled.span`
    display: block;
    margin-top: 2rem;
    width: 30px;
    height: 2.5px;
    background-color: #ffd100;
    border-radius: 100px;
    position: relative;

    &::after, &::before {
        content: '';
        border-radius: 100px;
        position: absolute;
        width: 30px;
        height: 2.5px;
        background-color: #ffd100;
    }

    &::after  { transform: translateY(-10px); }
    &::before { transform: translateY(10px);  }
`;

/* ── Ícone fechar (×) ────────────────────────────────────────────── */

export const IconSideBarClose = styled.span`
    display: block;
    margin-top: 2rem;
    width: 30px;
    height: 2.5px;
    background-color: #ffd100;
    border-radius: 100px;
    transform: rotate(45deg);
    position: relative;

    &::before {
        content: '';
        border-radius: 100px;
        position: absolute;
        width: 30px;
        height: 2.5px;
        background-color: #ffd100;
        transform: rotate(90deg);
    }
`;

/* ── Overlay escuro (fecha a sidebar ao clicar fora) ─────────────── */

export const BlackDiv = styled.div`
    background-color: #000000a4;
    position: fixed;
    top: 0;
    left: 0;
    width: ${props => props.open ? '100vw' : '0'};
    height: 100vh;
    z-index: 2;
    cursor: pointer;
    transition: width 0.2s;
    pointer-events: ${props => props.open ? 'auto' : 'none'};
`;

/* ── Cabeçalho com nome e cargo ──────────────────────────────────── */

export const NameTitle = styled.div`
    cursor: default;
    text-align: center;
    margin-top: 3rem;

    h1 {
        color: #ffee32;
        opacity: ${props => props.open ? '1' : '0'};
        font-size: 1.25rem;
        margin-bottom: 1rem;
        margin-top: 1rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    p {
        color: #ffee32;
        opacity: ${props => props.open ? '1' : '0'};
        margin-bottom: 1.3rem;
        font-size: 0.9rem;
    }

    @media (max-width: 768px) {
        margin-top: 1.5rem;
    }
`;
