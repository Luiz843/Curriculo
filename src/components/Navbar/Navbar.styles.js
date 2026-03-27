/**
 * @file Navbar.styles.js
 * @description Styled-components da Navbar: barra horizontal fixa, backdrop blur,
 *              links de navegação e menu mobile dropdown.
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 2.0.0
 */

import styled from "styled-components";

/* ── Container da navbar ─────────────────────────────────────────── */

export const NavbarContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(17, 17, 17, 0.88);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
    padding: 0 2.5rem;
    min-height: 4rem;
    border-bottom: 1px solid rgba(255, 209, 0, 0.12);
    transition: background-color 0.3s ease;

    @media (max-width: 768px) {
        padding: 0 1.5rem;
    }
`;

/* ── Logo / nome ─────────────────────────────────────────────────── */

export const NavBrand = styled.h1`
    color: #ffd100;
    font-family: 'Playfair Display', serif;
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: 0.5px;
    white-space: nowrap;
    flex-shrink: 0;
    padding: 1rem 0;
`;

/* ── Links desktop ───────────────────────────────────────────────── */

export const NavContainer = styled.nav`
    display: flex;
    gap: 2rem;
    align-items: center;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const NavLink = styled.a`
    color: #ccc;
    text-decoration: none;
    font-size: 0.88rem;
    font-weight: 500;
    letter-spacing: 0.5px;
    padding: 1.3rem 0;
    border-bottom: 2px solid transparent;
    transition: color 0.3s ease, border-color 0.3s ease;

    &:hover {
        color: #ffd100;
        border-bottom-color: #ffd100;
    }

    &:focus-visible {
        outline: 2px solid #ffd100;
        outline-offset: 4px;
        border-radius: 3px;
    }
`;

/* ── Botão hamburguer (mobile ≤768px) ────────────────────────────── */

export const HamburgerBtn = styled.button`
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.6rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    flex-shrink: 0;
    border-radius: 4px;
    transition: background-color 0.2s;

    &:hover  { background-color: rgba(255, 209, 0, 0.1); }

    &:focus-visible {
        outline: 2px solid #ffd100;
        outline-offset: 2px;
    }

    @media (max-width: 768px) {
        display: flex;
    }
`;

export const HamburgerLine = styled.span`
    display: block;
    width: 22px;
    height: 2px;
    background-color: #ffd100;
    border-radius: 2px;
    transition: transform 0.3s ease, opacity 0.3s ease;

    &:nth-child(1) { transform: ${p => p.open ? 'translateY(7px) rotate(45deg)' : 'none'}; }
    &:nth-child(2) { opacity:   ${p => p.open ? '0' : '1'}; }
    &:nth-child(3) { transform: ${p => p.open ? 'translateY(-7px) rotate(-45deg)' : 'none'}; }
`;

/* ── Menu mobile dropdown ────────────────────────────────────────── */

export const MobileMenu = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0.5rem 0 1rem;
        border-top: 1px solid rgba(255, 209, 0, 0.1);
    }
`;

export const MobileNavLink = styled.a`
    color: #ccc;
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 500;
    padding: 0.8rem 0.25rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
    transition: color 0.3s ease, padding-left 0.3s ease;

    &:last-child { border-bottom: none; }

    &:hover {
        color: #ffd100;
        padding-left: 0.75rem;
    }
`;
