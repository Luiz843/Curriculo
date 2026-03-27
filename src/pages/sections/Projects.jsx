/**
 * @file Projects.jsx
 * @description Seção de projetos com cards contendo imagem placeholder em gradiente,
 *              categoria, título e overlay com link ao hover.
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 2.0.0
 */

import React from "react";
import Section from "../../components/Section/Section";
import {
    ProjectsGrid,
    ProjectCard,
    ProjectThumb,
    ProjectOverlay,
    ProjectOverlayLink,
    ProjectBody,
    ProjectCategory,
    ProjectTitle,
    ProjectDescription,
} from "./Projects.styles";

/** @type {Array<{gradient: string, category: string, title: string, description: string, url: string}>} */
const PROJECTS = [
    {
        gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        category: "Bot / IA",
        title:    "Hefesto — Discord Bot",
        description:
            "Bot para Discord integrado ao Claude via protocolo MCP. Permite conversar com IA diretamente em servidores, com suporte a múltiplos modelos e histórico de contexto.",
        url: "https://github.com/Luiz843",
    },
    {
        gradient: "linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 50%, #2a1810 100%)",
        category: "React / Web",
        title:    "Portfólio Web",
        description:
            "Portfólio pessoal desenvolvido com React, Vite e styled-components. Dark theme com animações CSS e layout responsivo para todas as telas.",
        url: "https://github.com/Luiz843",
    },
];

/**
 * @description Seção de projetos com grid de cards e overlay ao hover.
 * @returns {JSX.Element} Elemento React renderizado
 */
export default function Projects() {
    return (
        <Section title="Projetos" id="projetos" sectionLabel="— Projetos —" backgroundColor="#1a1a1a">
            <ProjectsGrid>
                {PROJECTS.map(({ gradient, category, title, description, url }) => (
                    <ProjectCard key={title}>
                        <ProjectThumb gradient={gradient}>
                            <ProjectOverlay>
                                <ProjectOverlayLink
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Ver projeto ${title} no GitHub`}
                                >
                                    Ver projeto
                                </ProjectOverlayLink>
                            </ProjectOverlay>
                        </ProjectThumb>
                        <ProjectBody>
                            <ProjectCategory>{category}</ProjectCategory>
                            <ProjectTitle>{title}</ProjectTitle>
                            <ProjectDescription>{description}</ProjectDescription>
                        </ProjectBody>
                    </ProjectCard>
                ))}
            </ProjectsGrid>
        </Section>
    );
}
