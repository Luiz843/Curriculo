/**
 * @file Resume.styles.js
 * @description Styled-components da seção Resume: linha do tempo de
 *              experiências profissionais e bloco de formação acadêmica.
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 1.0.0
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
    color: #ffd100;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #ffd100;
`;

/* ── Timeline ──────────────────────────────────────────── */

export const Timeline = styled.div`
    position: relative;
    padding-left: 1.5rem;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 6px;
        bottom: 0;
        width: 2px;
        background-color: #444;
    }
`;

export const TimelineItem = styled.div`
    position: relative;
    padding-bottom: 2.5rem;

    &:last-child {
        padding-bottom: 0;
    }

    &::before {
        content: '';
        position: absolute;
        left: -1.75rem;
        top: 6px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #ffd100;
        border: 2px solid #202020;
    }
`;

export const TimelineDate = styled.span`
    color: #ffd100;
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    display: block;
    margin-bottom: 0.4rem;
`;

export const TimelineCompany = styled.h4`
    color: #fff;
    font-size: 1.1rem;
    margin: 0 0 0.2rem;
`;

export const TimelineRole = styled.p`
    color: #aaa;
    font-size: 0.95rem;
    margin: 0 0 0.2rem;
`;

export const TimelineLocation = styled.span`
    color: #666;
    font-size: 0.85rem;
`;

/* ── Education ─────────────────────────────────────────── */

export const EducationCard = styled.div`
    background-color: #2a2a2a;
    border: 1px solid #444;
    border-left: 4px solid #ffd100;
    border-radius: 8px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;

    &:last-child {
        margin-bottom: 0;
    }
`;

export const EducationCourse = styled.h4`
    color: #fff;
    font-size: 1.05rem;
    margin: 0 0 0.4rem;
`;

export const EducationInstitution = styled.p`
    color: #ffd100;
    font-size: 0.95rem;
    font-weight: 600;
    margin: 0 0 0.3rem;
`;

export const EducationStatus = styled.span`
    background-color: #333;
    border-radius: 4px;
    color: #aaa;
    font-size: 0.8rem;
    padding: 0.2rem 0.6rem;
`;
