/**
 * @file Projects.styles.js
 * @description Styled-components da seção Projects: grid de cards com thumbnail
 *              em gradiente, overlay ao hover e informações do projeto.
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 2.0.0
 */

import styled from "styled-components";

export const ProjectsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(320px, 100%), 1fr));
    gap: 2rem;
    max-width: 1100px;
    margin: 0 auto;

    @media (max-width: 480px) {
        gap: 1.5rem;
    }
`;

export const ProjectCard = styled.article`
    background-color: #1e1e1e;
    border: 1px solid #2a2a2a;
    border-radius: 12px;
    overflow: hidden;
    transition: border-color 0.3s ease, transform 0.3s ease;

    &:hover {
        border-color: #ffd100;
        transform: translateY(-5px);
    }
`;

export const ProjectThumb = styled.div`
    width: 100%;
    height: 180px;
    background: ${p => p.gradient || 'linear-gradient(135deg, #1a1a1a, #2a2a2a)'};
    position: relative;
    overflow: hidden;
`;

export const ProjectOverlay = styled.div`
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.72);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;

    ${ProjectThumb}:hover & {
        opacity: 1;
    }
`;

export const ProjectOverlayLink = styled.a`
    background-color: #ffd100;
    color: #111111;
    font-size: 0.82rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 0.65rem 1.5rem;
    border-radius: 4px;
    text-decoration: none;
    transition: background-color 0.2s ease;

    &:hover { background-color: #ffee32; }
`;

export const ProjectBody = styled.div`
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
`;

export const ProjectCategory = styled.span`
    color: #ffd100;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
`;

export const ProjectTitle = styled.h3`
    font-family: 'Playfair Display', serif;
    color: #ffffff;
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0;
`;

export const ProjectDescription = styled.p`
    color: #aaa;
    font-size: 0.9rem;
    line-height: 1.7;
    margin: 0;
`;
