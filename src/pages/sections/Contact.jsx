/**
 * @file Contact.jsx
 * @description Seção de contato com formulário (Nome, Email, Mensagem, Enviar)
 *              e links para GitHub, LinkedIn e email provenientes de personalInfo.
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 1.0.0
 */

import React from "react";
import Section from "../../components/Section/Section";
import { personalInfo } from "../../data/resume";
import {
    ContactWrapper,
    ContactForm,
    ContactInput,
    ContactTextarea,
    ContactButton,
    ContactSocial,
    ContactSocialTitle,
    ContactSocialLink,
} from "./Contact.styles";

/**
 * @description Seção de contato com formulário e links sociais de personalInfo.
 * @returns {JSX.Element} Elemento React renderizado
 */
export default function Contact() {
    return (
        <Section title="Contato" id="contato">
            <ContactWrapper>
                {/* Formulário */}
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

                {/* Links sociais */}
                <ContactSocial>
                    <ContactSocialTitle>Onde me encontrar</ContactSocialTitle>

                    <ContactSocialLink
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <span>🐙</span> GitHub
                    </ContactSocialLink>

                    <ContactSocialLink
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <span>💼</span> LinkedIn
                    </ContactSocialLink>

                    <ContactSocialLink
                        href={`mailto:${personalInfo.email}`}
                        aria-label="Email"
                    >
                        <span>✉️</span> Email
                    </ContactSocialLink>
                </ContactSocial>
            </ContactWrapper>
        </Section>
    );
}
