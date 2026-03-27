/**
 * @file About.styles.js
 * @description Styled-components da seção About: grid duas colunas,
 *              bio à esquerda e lista de info pessoal à direita.
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 2.0.0
 */

import styled from "styled-components";

export const AboutGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    max-width: 1100px;
    margin: 0 auto;
    align-items: start;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 2.5rem;
    }
`;

export const AboutBio = styled.div`
    p {
        font-family: 'Inter', sans-serif;
        color: #ccc;
        font-size: 1rem;
        line-height: 1.95;
    }
`;

export const AboutInfoList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0;
`;

export const AboutInfoItem = styled.li`
    display: flex;
    gap: 1.2rem;
    align-items: flex-start;
    padding: 0.85rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);

    &:last-of-type {
        border-bottom: none;
        padding-bottom: 0;
    }
`;

export const AboutInfoLabel = styled.span`
    color: #ffd100;
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    min-width: 80px;
    flex-shrink: 0;
    padding-top: 0.1rem;
`;

export const AboutInfoValue = styled.span`
    color: #ccc;
    font-size: 0.95rem;
    line-height: 1.5;
`;

export const AboutInfoLink = styled.a`
    color: #ccc;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover { color: #ffd100; }

    &:focus-visible {
        outline: 2px solid #ffd100;
        outline-offset: 2px;
        border-radius: 2px;
    }
`;

export const DownloadBtn = styled.a`
    display: inline-block;
    margin-top: 1.5rem;
    background-color: transparent;
    border: 2px solid #ffd100;
    color: #ffd100;
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 0.7rem 1.8rem;
    border-radius: 4px;
    text-decoration: none;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;

    &:hover {
        background-color: #ffd100;
        color: #111111;
        transform: translateY(-2px);
    }

    &:focus-visible {
        outline: 2px solid #ffee32;
        outline-offset: 3px;
    }
`;
