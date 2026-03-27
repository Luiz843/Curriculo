/**
 * @file Section.styles.js
 * @description Styled-components do container genérico de seção: fade-in,
 *              label decorativo em amarelo, título Playfair Display centralizado.
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 2.0.0
 */

import styled from "styled-components";

export const SectionContainer = styled.section`
    padding: 80px 2rem;
    background-color: ${p => p.backgroundColor || '#1a1a1a'};
    scroll-margin-top: 4rem;
    opacity:    ${p => p.visible ? '1' : '0'};
    transform:  ${p => p.visible ? 'translateY(0)' : 'translateY(28px)'};
    transition: opacity 0.65s ease, transform 0.65s ease;

    @media (max-width: 768px) {
        padding: 60px 1.5rem;
    }

    @media (max-width: 480px) {
        padding: 50px 1rem;
    }
`;

export const SectionLabel = styled.p`
    color: #ffd100;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 4px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 0.75rem;
`;

export const SectionTitle = styled.h2`
    font-family: 'Playfair Display', serif;
    color: #ffffff;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 3.5rem;
    text-align: center;
    position: relative;

    &::after {
        content: '';
        display: block;
        width: 60px;
        height: 3px;
        background-color: #ffd100;
        margin: 1rem auto 0;
        border-radius: 2px;
    }

    @media (max-width: 768px) {
        font-size: 2rem;
        margin-bottom: 2.5rem;
    }

    @media (max-width: 480px) {
        font-size: 1.75rem;
    }
`;
