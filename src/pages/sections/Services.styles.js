/**
 * @file Services.styles.js
 * @description Styled-components da seção Services: grid de cards de serviços
 *              com ícone, título e descrição.
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 1.0.0
 */

import styled from "styled-components";

export const ServicesGrid = styled.div`
    display: grid;
    /* min(260px, 100%) garante coluna única em telas < 260px */
    grid-template-columns: repeat(auto-fit, minmax(min(260px, 100%), 1fr));
    gap: 2rem;
    max-width: 1100px;
    margin: 0 auto;

    @media (max-width: 480px) {
        gap: 1.25rem;
    }
`;

export const ServiceCard = styled.div`
    background-color: #2a2a2a;
    border: 1px solid #444;
    border-top: 4px solid #ffd100;
    border-radius: 12px;
    padding: 2rem 1.8rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition: transform 0.2s, border-color 0.25s;

    &:hover {
        transform: translateY(-4px);
        border-color: #ffee32;
    }
`;

export const ServiceEmoji = styled.span`
    font-size: 2.8rem;
`;

export const ServiceTitle = styled.h3`
    color: #ffee32;
    font-size: 1.25rem;
    margin: 0;
`;

export const ServiceDescription = styled.p`
    color: #ccc;
    font-size: 0.95rem;
    line-height: 1.7;
    margin: 0;
`;
