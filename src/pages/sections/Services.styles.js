/**
 * @file Services.styles.js
 * @description Styled-components da seção Services: grid de cards com ícone,
 *              título e descrição. Hover: borda #ffd100 + translateY(-5px).
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 2.0.0
 */

import styled from "styled-components";

export const ServicesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
    gap: 2rem;
    max-width: 1100px;
    margin: 0 auto;

    @media (max-width: 480px) {
        gap: 1.5rem;
    }
`;

export const ServiceCard = styled.div`
    background-color: #1a1a1a;
    border: 1px solid #2a2a2a;
    border-radius: 12px;
    padding: 2.5rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition: border-color 0.3s ease, transform 0.3s ease;

    &:hover {
        border-color: #ffd100;
        transform: translateY(-5px);
    }
`;

export const ServiceIcon = styled.span`
    font-size: 2.8rem;
    line-height: 1;
`;

export const ServiceTitle = styled.h3`
    font-family: 'Playfair Display', serif;
    color: #ffffff;
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0;
`;

export const ServiceDescription = styled.p`
    color: #aaa;
    font-size: 0.93rem;
    line-height: 1.75;
    margin: 0;
`;
