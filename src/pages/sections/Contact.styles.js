/**
 * @file Contact.styles.js
 * @description Styled-components da seção Contact: info de contato à esquerda
 *              e formulário com campos estilizados à direita.
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 2.0.0
 */

import styled from "styled-components";

export const ContactWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 4rem;
    max-width: 1100px;
    margin: 0 auto;
    align-items: start;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 2.5rem;
    }
`;

/* ── Coluna de informações ───────────────────────────────────────── */

export const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
`;

export const ContactInfoTitle = styled.h3`
    font-family: 'Playfair Display', serif;
    color: #ffffff;
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
`;

export const ContactInfoLink = styled.a`
    display: flex;
    align-items: center;
    gap: 0.85rem;
    background-color: #1e1e1e;
    border: 1px solid #2a2a2a;
    border-radius: 8px;
    color: #ccc;
    font-size: 0.93rem;
    padding: 0.9rem 1.2rem;
    text-decoration: none;
    transition: border-color 0.3s ease, color 0.3s ease, transform 0.2s ease;

    span { font-size: 1.2rem; }

    &:hover {
        border-color: #ffd100;
        color: #ffd100;
        transform: translateX(4px);
    }

    &:focus-visible {
        outline: 2px solid #ffd100;
        outline-offset: 2px;
        border-radius: 8px;
    }
`;

/* ── Formulário ──────────────────────────────────────────────────── */

export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
`;

export const ContactInput = styled.input`
    background-color: #1e1e1e;
    border: 1px solid #2a2a2a;
    border-radius: 8px;
    color: #fff;
    font-family: 'Inter', sans-serif;
    font-size: 0.95rem;
    padding: 0.9rem 1.2rem;
    outline: none;
    transition: border-color 0.3s ease;

    &:focus { border-color: #ffd100; }

    &::placeholder { color: #555; }
`;

export const ContactTextarea = styled.textarea`
    background-color: #1e1e1e;
    border: 1px solid #2a2a2a;
    border-radius: 8px;
    color: #fff;
    font-family: 'Inter', sans-serif;
    font-size: 0.95rem;
    padding: 0.9rem 1.2rem;
    min-height: 160px;
    resize: vertical;
    outline: none;
    transition: border-color 0.3s ease;

    &:focus { border-color: #ffd100; }

    &::placeholder { color: #555; }
`;

export const ContactButton = styled.button`
    background-color: #ffd100;
    border: none;
    border-radius: 8px;
    color: #111111;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    font-size: 0.88rem;
    font-weight: 700;
    letter-spacing: 2px;
    padding: 0.9rem 2rem;
    text-transform: uppercase;
    align-self: flex-start;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
        background-color: #ffee32;
        transform: translateY(-2px);
    }

    &:focus-visible {
        outline: 2px solid #ffee32;
        outline-offset: 3px;
    }
`;
