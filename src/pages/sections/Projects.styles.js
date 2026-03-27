/**
 * @file Projects.styles.js
 * @description Styled-components da seção Projects: grid de cards de projetos
 *              com título, descrição e link externo.
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 1.0.0
 */

import styled from "styled-components";

export const ProjectsGrid = styled.div`
    display: grid;
    /* min(300px, 100%) garante coluna única em telas < 300px */
    grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
    gap: 2rem;
    max-width: 1100px;
    margin: 0 auto;

    @media (max-width: 480px) {
        gap: 1.25rem;
    }
`;

export const ProjectCard = styled.article`
    background-color: #2a2a2a;
    border: 1px solid #444;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    transition: border-color 0.25s, transform 0.2s;

    &:hover {
        border-color: #ffd100;
        transform: translateY(-4px);
    }
`;

export const ProjectEmoji = styled.span`
    font-size: 2.5rem;
`;

export const ProjectTitle = styled.h3`
    color: #ffee32;
    font-size: 1.4rem;
    margin: 0;
`;

export const ProjectDescription = styled.p`
    color: #ccc;
    font-size: 1rem;
    line-height: 1.7;
    flex: 1;
    margin: 0;
`;

export const ProjectLink = styled.a`
    align-self: flex-start;
    background-color: transparent;
    border: 1px solid #ffd100;
    border-radius: 6px;
    color: #ffd100;
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 1px;
    padding: 0.5rem 1.2rem;
    text-decoration: none;
    text-transform: uppercase;
    transition: background-color 0.25s, color 0.25s;

    &:hover {
        background-color: #ffd100;
        color: #202020;
    }
`;
