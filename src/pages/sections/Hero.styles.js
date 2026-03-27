/**
 * @file Hero.styles.js
 * @description Styled-components da Hero section: full viewport, gradiente sutil,
 *              foto circular, nome, cargo animado e botões de ação.
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 1.0.0
 */

import styled from "styled-components";

export const HeroSection = styled.section`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(160deg, #0d0d0d 0%, #161616 45%, #111111 100%);
    position: relative;
    overflow: hidden;

    /* Brilho radial central sutil */
    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 700px;
        height: 700px;
        background: radial-gradient(circle, rgba(255, 209, 0, 0.05) 0%, transparent 65%);
        transform: translate(-50%, -50%);
        pointer-events: none;
    }
`;

export const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.25rem;
    padding: 6rem 2rem 4rem;
    position: relative;
    z-index: 1;
`;

export const HeroName = styled.h1`
    font-family: 'Playfair Display', serif;
    color: #ffffff;
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: 1px;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 2.2rem;
    }

    @media (max-width: 480px) {
        font-size: 1.8rem;
    }
`;

/* Wrapper flex que mantém texto digitado e cursor | na mesma linha */
export const HeroRoleWrapper = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 2rem;
    white-space: nowrap;

    /* Cursor injetado pelo Typed.js como irmão do span */
    .typed-cursor {
        color: #ffd100;
        font-size: 1.25rem;
        font-weight: 400;
        opacity: 1;
        animation: blink 0.7s infinite;
        margin-left: 1px;
    }

    @keyframes blink {
        0%, 100% { opacity: 1; }
        50%       { opacity: 0; }
    }

    @media (max-width: 480px) {
        font-size: 1.05rem;
    }
`;

/* Span alvo do Typed.js — display: inline para não quebrar linha */
export const HeroRole = styled.span`
    display: inline;
    color: #ffd100;
    font-size: 1.25rem;
    font-weight: 500;
    letter-spacing: 1px;

    @media (max-width: 480px) {
        font-size: 1.05rem;
    }
`;

export const HeroActions = styled.div`
    display: flex;
    gap: 1.2rem;
    margin-top: 0.75rem;
    flex-wrap: wrap;
    justify-content: center;
`;

export const HeroBtn = styled.a`
    background-color: #ffd100;
    color: #111111;
    font-size: 0.88rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 0.85rem 2rem;
    border-radius: 4px;
    text-decoration: none;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
        background-color: #ffee32;
        transform: translateY(-3px);
    }

    &:focus-visible {
        outline: 2px solid #ffee32;
        outline-offset: 3px;
    }
`;

export const HeroBtnOutline = styled.a`
    background-color: transparent;
    color: #ffd100;
    border: 2px solid #ffd100;
    font-size: 0.88rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 0.85rem 2rem;
    border-radius: 4px;
    text-decoration: none;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;

    &:hover {
        background-color: #ffd100;
        color: #111111;
        transform: translateY(-3px);
    }

    &:focus-visible {
        outline: 2px solid #ffd100;
        outline-offset: 3px;
    }
`;
