/**
 * @file Section.styles.js
 * @description Styled-components do container genérico de seção e seu título.
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 1.0.0
 */

import styled from "styled-components";

export const SectionContainer = styled.section`
    min-height: 100vh;
    padding: 4rem 2rem;
    background-color: ${props => props.backgroundColor || 'transparent'};
    scroll-margin-top: 3.5rem;

    /* ── Tablet ──── */
    @media (max-width: 768px) {
        padding: 3rem 1rem;
        min-height: auto;
    }

    /* ── Mobile ──── */
    @media (max-width: 480px) {
        padding: 2.5rem 0.75rem;
    }

    /* ── Mobile pequeno ──── */
    @media (max-width: 320px) {
        padding: 2rem 0.5rem;
    }
`;

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

    /* ── Tablet ──── */
    @media (max-width: 768px) {
        font-size: 2rem;
    }

    /* ── Mobile ──── */
    @media (max-width: 480px) {
        font-size: 1.75rem;
        margin-bottom: 1.5rem;
    }

    /* ── Mobile pequeno ──── */
    @media (max-width: 320px) {
        font-size: 1.5rem;
    }
`;
