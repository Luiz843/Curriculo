/**
 * @file Skills.styles.js
 * @description Styled-components da seção Skills: duas colunas de barras de
 *              progresso animadas com nome e percentual.
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 2.0.0
 */

import styled from "styled-components";

export const SkillsColumns = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem 4rem;
    max-width: 1100px;
    margin: 0 auto;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
`;

export const SkillItem = styled.div`
    margin-bottom: 2rem;

    &:last-child { margin-bottom: 0; }
`;

export const SkillHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.6rem;
`;

export const SkillName = styled.span`
    color: #ffffff;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.5px;
`;

export const SkillPercent = styled.span`
    color: #ffd100;
    font-size: 0.85rem;
    font-weight: 600;
`;

export const SkillBarTrack = styled.div`
    width: 100%;
    height: 6px;
    background-color: #2a2a2a;
    border-radius: 10px;
    overflow: hidden;
`;

export const SkillProgressBar = styled.div`
    height: 100%;
    background: linear-gradient(90deg, #ffd100, #ffee32);
    border-radius: 10px;
    transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
`;
