/**
 * @file Contact.jsx
 * @description Seção de contato: info de contato à esquerda (email, GitHub,
 *              LinkedIn) e formulário à direita.
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 2.0.0
 */

import React from "react";
import Section from "../../components/Section/Section";
import { personalInfo } from "../../data/resume";
import {
    ContactWrapper,
    ContactInfo,
    ContactInfoTitle,
    ContactInfoLink,
    ContactForm,
    ContactInput,
    ContactTextarea,
    ContactButton,
} from "./Contact.styles";

/**
 * @description Seção de contato com info à esquerda e formulário à direita.
 * @returns {JSX.Element} Elemento React renderizado
 */
export default function Contact() {
    return (
        <Section title="Contato" id="contato" sectionLabel="— Entre em contato —" backgroundColor="#111111">
            <ContactWrapper>
                {/* Coluna esquerda — informações de contato */}
                <ContactInfo>
                    <ContactInfoTitle>Onde me encontrar</ContactInfoTitle>

                    <ContactInfoLink
                        href={`mailto:${personalInfo.email}`}
                        aria-label="Email"
                    >
                        <span aria-hidden="true">✉️</span>
                        {personalInfo.email}
                    </ContactInfoLink>

                    <ContactInfoLink
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <span aria-hidden="true">🐙</span>
                        github.com/Luiz843
                    </ContactInfoLink>

                    <ContactInfoLink
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <span aria-hidden="true">💼</span>
                        LinkedIn
                    </ContactInfoLink>
                </ContactInfo>

                {/* Coluna direita — formulário */}
                <ContactForm>
                    <ContactInput
                        type="text"
                        placeholder="Nome"
                        name="nome"
                        aria-label="Nome"
                        autoComplete="name"
                    />
                    <ContactInput
                        type="email"
                        placeholder="Email"
                        name="email"
                        aria-label="Email"
                        autoComplete="email"
                    />
                    <ContactTextarea
                        placeholder="Mensagem"
                        name="mensagem"
                        aria-label="Mensagem"
                    />
                    <ContactButton type="button" aria-label="Enviar mensagem">
                        Enviar
                    </ContactButton>
                </ContactForm>
            </ContactWrapper>
        </Section>
    );
}
