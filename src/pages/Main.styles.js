/**
 * @file Main.styles.js
 * @description Styled-components da página principal: área de conteúdo que
 *              se ajusta à largura da Sidebar em desktop e ocupa 100% em mobile.
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 1.0.0
 */

import styled from "styled-components";

export const MainContent = styled.main`
    margin-left: ${props => props.open ? '20rem' : '3rem'};
    margin-top: 3.5rem;
    width: calc(100% - ${props => props.open ? '20rem' : '3rem'});
    background-color: #333533;
    min-height: 100vh;
    padding: 2rem;
    transition: margin-left 0.5s, width 0.5s;

    /* ── Tablet (≤768px): sidebar vira off-canvas — sem deslocamento ── */
    @media (max-width: 768px) {
        margin-left: 0;
        width: 100%;
        padding: 1.5rem 1rem;
        transition: none;
    }

    /* ── Mobile pequeno (≤480px) ─────────────────────────────────────── */
    @media (max-width: 480px) {
        padding: 1rem 0.75rem;
    }
`;
