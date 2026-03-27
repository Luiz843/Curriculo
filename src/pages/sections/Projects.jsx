/**
 * @file Projects.jsx
 * @description Seção de projetos com cards placeholder contendo título,
 *              descrição e link para o repositório.
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 1.0.0
 */

import React from "react";
import Section from "../../components/Section/Section";
import {
    ProjectsGrid,
    ProjectCard,
    ProjectEmoji,
    ProjectTitle,
    ProjectDescription,
    ProjectLink,
} from "./Projects.styles";

/** @type {Array<{emoji: string, title: string, description: string, url: string}>} */
const PROJECTS = [
    {
        emoji: "🤖",
        title: "Hefesto — Discord Bot",
        description:
            "Bot para Discord integrado ao Claude via protocolo MCP. Permite conversar com IA diretamente em servidores, com suporte a múltiplos modelos e histórico de contexto.",
        url: "https://github.com/Luiz843",
    },
    {
        emoji: "🌐",
        title: "Portfólio Web",
        description:
            "Portfólio pessoal desenvolvido com React, Vite e styled-components. Dark theme com animações CSS e layout responsivo para todas as telas.",
        url: "https://github.com/Luiz843",
    },
];

/**
 * @description Seção de projetos com grid de cards.
 * @returns {JSX.Element} Elemento React renderizado
 */
export default function Projects() {
    return (
        <Section title="Projetos" id="projetos">
            <ProjectsGrid>
                {PROJECTS.map(({ emoji, title, description, url }) => (
                    <ProjectCard key={title}>
                        <ProjectEmoji>{emoji}</ProjectEmoji>
                        <ProjectTitle>{title}</ProjectTitle>
                        <ProjectDescription>{description}</ProjectDescription>
                        <ProjectLink
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Ver projeto ${title} no GitHub`}
                        >
                            Ver projeto
                        </ProjectLink>
                    </ProjectCard>
                ))}
            </ProjectsGrid>
        </Section>
    );
}
