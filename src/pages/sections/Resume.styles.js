/**
 * @file Resume.styles.js
 * @description Styled-components da seção Resume: linha do tempo centralizada
 *              com dot e card, e bloco de formação acadêmica.
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 2.0.0
 */

import styled from "styled-components";

export const ResumeGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    max-width: 1100px;
    margin: 0 auto;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
`;

export const ResumeBlockTitle = styled.h3`
    font-family: 'Playfair Display', serif;
    color: #ffffff;
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 2rem;
    padding-bottom: 0.75rem;
    border-bottom: 2px solid #ffd100;
`;

/* ── Timeline ──────────────────────────────────────────────────── */

export const Timeline = styled.div`
    position: relative;
    padding-left: 2rem;

    &::before {
        content: '';
        position: absolute;
        left: 7px;
        top: 8px;
        bottom: 8px;
        width: 2px;
        background: linear-gradient(to bottom, #ffd100, rgba(255, 209, 0, 0.15));
        border-radius: 2px;
    }
`;

export const TimelineItem = styled.div`
    position: relative;
    padding-bottom: 2.5rem;

    &:last-child {
        padding-bottom: 0;
    }
`;

export const TimelineDot = styled.span`
    position: absolute;
    left: -1.75rem;
    top: 6px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: #ffd100;
    border: 3px solid #111111;
    box-shadow: 0 0 0 2px rgba(255, 209, 0, 0.3);
    z-index: 1;
`;

export const TimelineCard = styled.div`
    background-color: #1e1e1e;
    border: 1px solid #2e2e2e;
    border-left: 3px solid #ffd100;
    border-radius: 8px;
    padding: 1.25rem 1.5rem;
    transition: border-color 0.3s ease, transform 0.2s ease;

    &:hover {
        border-color: #ffd100;
        transform: translateX(4px);
    }
`;

export const TimelineDate = styled.span`
    color: #ffd100;
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    display: block;
    margin-bottom: 0.5rem;
`;

export const TimelineCompany = styled.h4`
    color: #ffffff;
    font-size: 1.05rem;
    font-weight: 600;
    margin: 0 0 0.25rem;
`;

export const TimelineRole = styled.p`
    color: #aaa;
    font-size: 0.9rem;
    margin: 0 0 0.2rem;
`;

export const TimelineLocation = styled.span`
    color: #666;
    font-size: 0.82rem;
`;

/* ── Education ─────────────────────────────────────────────────── */

export const EducationCard = styled.div`
    background-color: #1e1e1e;
    border: 1px solid #2e2e2e;
    border-left: 3px solid #ffd100;
    border-radius: 8px;
    padding: 1.75rem;
    margin-bottom: 1.5rem;
    transition: transform 0.2s ease, border-color 0.3s ease;

    &:last-child { margin-bottom: 0; }

    &:hover {
        border-color: #ffd100;
        transform: translateX(4px);
    }
`;

export const EducationCourse = styled.h4`
    color: #ffffff;
    font-size: 1.05rem;
    font-weight: 600;
    margin: 0 0 0.5rem;
`;

export const EducationInstitution = styled.p`
    color: #ffd100;
    font-size: 0.95rem;
    font-weight: 600;
    margin: 0 0 0.5rem;
`;

export const EducationStatus = styled.span`
    display: inline-block;
    background-color: rgba(255, 209, 0, 0.1);
    border: 1px solid rgba(255, 209, 0, 0.25);
    border-radius: 20px;
    color: #ffd100;
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    padding: 0.2rem 0.75rem;
`;
