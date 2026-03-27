/**
 * @file Navbar.styles.js
 * @description Styled-components da Navbar: barra fixa no topo, links de
 *              navegação e botão hamburguer para mobile.
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 1.0.0
 */

import styled from "styled-components";

/* ── Container da navbar ─────────────────────────────────────────── */

export const NavbarContainer = styled.div`
    position: fixed;
    top: 0;
    left: ${props => props.open ? '20rem' : '3rem'};
    width: calc(100% - ${props => props.open ? '20rem' : '3rem'});
    background-color: #202020;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
    padding: 0.9rem 2rem;
    transition: left 0.5s, width 0.5s;
    min-height: 3.5rem;

    /* ── Tablet (≤768px) ──────────────────────────────────── */
    @media (max-width: 768px) {
        left: 0;
        width: 100%;
        padding: 0.9rem 1.2rem;
        transition: none;
    }
`;

/* ── Título / nome ───────────────────────────────────────────────── */

export const Title = styled.h1`
    color: #ffee32;
    font-size: 1.3rem;
    flex-shrink: 0;
    white-space: nowrap;

    @media (max-width: 480px) {
        font-size: 1.1rem;
    }

    @media (max-width: 320px) {
        font-size: 1rem;
    }
`;

/* ── Grupo de links de navegação ─────────────────────────────────── */

export const NavContainer = styled.nav`
    display: flex;
    gap: 1.5rem;
    flex-wrap: nowrap;
    overflow-x: auto;

    /* scrollbar invisível */
    scrollbar-width: none;
    &::-webkit-scrollbar { display: none; }

    @media (max-width: 768px) {
        gap: 1rem;
    }

    /* No mobile pequeno, esconde os links — o usuário navega pela sidebar */
    @media (max-width: 480px) {
        display: none;
    }
`;

/* ── Link de navegação ───────────────────────────────────────────── */

export const NavLink = styled.a`
    color: #ffffff;
    text-decoration: none;
    font-size: 0.95rem;
    white-space: nowrap;
    padding: 0.25rem 0;
    border-bottom: 2px solid transparent;
    transition: color 0.25s, border-color 0.25s;

    &:hover {
        color: #ffd100;
        border-bottom-color: #ffd100;
    }

    &:focus-visible {
        outline: 2px solid #ffd100;
        outline-offset: 4px;
        border-radius: 3px;
    }

    @media (max-width: 768px) {
        font-size: 0.85rem;
    }
`;

/* ── Botão hamburguer (somente mobile ≤768px) ────────────────────── */

export const HamburgerBtn = styled.button`
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.4rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    flex-shrink: 0;
    border-radius: 4px;
    transition: background-color 0.2s;

    &:hover  { background-color: rgba(255, 209, 0, 0.15); }

    &:focus-visible {
        outline: 2px solid #ffd100;
        outline-offset: 2px;
    }

    @media (max-width: 768px) {
        display: flex;
    }
`;

/* ── Linhas do ícone hamburguer ──────────────────────────────────── */

export const HamburgerLine = styled.span`
    display: block;
    width: 24px;
    height: 2px;
    background-color: #ffd100;
    border-radius: 2px;
    transition: transform 0.3s, opacity 0.3s;

    /* Estado "aberto" — vira × */
    &:nth-child(1) { transform: ${props => props.open ? 'translateY(7px) rotate(45deg)' : 'none'}; }
    &:nth-child(2) { opacity:   ${props => props.open ? '0'                            : '1'   }; }
    &:nth-child(3) { transform: ${props => props.open ? 'translateY(-7px) rotate(-45deg)' : 'none'}; }
`;
