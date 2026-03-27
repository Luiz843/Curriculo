/**
 * @file Contact.styles.js
 * @description Styled-components da seção Contact: formulário, campos,
 *              botão Enviar e bloco de links sociais.
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 1.0.0
 */

import styled from "styled-components";

export const ContactWrapper = styled.div`
    display: flex;
    gap: 4rem;
    max-width: 1100px;
    margin: 0 auto;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 2.5rem;
    }
`;

export const ContactForm = styled.form`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
`;

export const ContactInput = styled.input`
    background-color: #2a2a2a;
    border: 1px solid #444;
    border-radius: 8px;
    color: #fff;
    font-size: 1rem;
    padding: 0.9rem 1.2rem;
    outline: none;
    transition: border-color 0.25s;

    &:focus {
        border-color: #ffd100;
    }

    &::placeholder {
        color: #888;
    }
`;

export const ContactTextarea = styled.textarea`
    background-color: #2a2a2a;
    border: 1px solid #444;
    border-radius: 8px;
    color: #fff;
    font-size: 1rem;
    padding: 0.9rem 1.2rem;
    min-height: 150px;
    resize: vertical;
    outline: none;
    transition: border-color 0.25s;
    font-family: inherit;

    &:focus {
        border-color: #ffd100;
    }

    &::placeholder {
        color: #888;
    }
`;

export const ContactButton = styled.button`
    background-color: #ffd100;
    border: none;
    border-radius: 8px;
    color: #202020;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 2px;
    padding: 0.9rem 2rem;
    text-transform: uppercase;
    align-self: flex-start;
    transition: background-color 0.25s, transform 0.15s;

    &:hover {
        background-color: #ffee32;
        transform: translateY(-2px);
    }

    &:focus-visible {
        outline: 2px solid #ffee32;
        outline-offset: 3px;
    }
`;

export const ContactSocial = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    justify-content: center;
    min-width: 240px;
`;

export const ContactSocialTitle = styled.h3`
    color: #ffee32;
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
`;

export const ContactSocialLink = styled.a`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    background-color: #2a2a2a;
    border: 1px solid #444;
    border-radius: 8px;
    color: #fff;
    font-size: 1rem;
    padding: 0.9rem 1.2rem;
    text-decoration: none;
    transition: border-color 0.25s, color 0.25s, background-color 0.25s;

    &:hover {
        border-color: #ffd100;
        color: #ffd100;
        background-color: #2e2e1a;
    }

    span {
        font-size: 1.3rem;
    }
`;
