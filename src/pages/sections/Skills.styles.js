/**
 * @file Skills.styles.js
 * @description Styled-components da seção Skills: grid de tags de habilidades.
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 1.0.0
 */

import styled from "styled-components";

export const SkillsGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    max-width: 1100px;
    margin: 0 auto;

    @media (max-width: 768px) {
        gap: 0.75rem;
    }
`;

export const SkillTag = styled.span`
    background-color: #2a2a2a;
    border: 1px solid #444;
    border-radius: 6px;
    color: #ffee32;
    cursor: default;
    font-size: 0.95rem;
    font-weight: 500;
    letter-spacing: 0.5px;
    padding: 0.5rem 1.1rem;
    transition: background-color 0.2s, border-color 0.2s, color 0.2s;

    &:hover {
        background-color: #ffd100;
        border-color: #ffd100;
        color: #202020;
    }
`;
