/**
 * @file About.jsx
 * @description Seção "Sobre mim" — bio à esquerda, lista de info pessoal
 *              à direita com botão Download CV.
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 2.0.0
 */

import React from "react";
import Section from "../../components/Section/Section";
import {
    AboutGrid,
    AboutBio,
    AboutInfoList,
    AboutInfoItem,
    AboutInfoLabel,
    AboutInfoValue,
    AboutInfoLink,
    DownloadBtn,
} from "./About.styles";
import { personalInfo } from "../../data/resume";

/**
 * @description Seção sobre mim com dados de personalInfo.
 * @returns {JSX.Element} Elemento React renderizado
 */
export default function About() {
    return (
        <Section id="sobre" title="Sobre Mim" sectionLabel="— Sobre mim —" backgroundColor="#1a1a1a">
            <AboutGrid>
                {/* Coluna esquerda — bio */}
                <AboutBio>
                    <p>{personalInfo.bio}</p>
                </AboutBio>

                {/* Coluna direita — informações pessoais */}
                <AboutInfoList>
                    <AboutInfoItem>
                        <AboutInfoLabel>Nome</AboutInfoLabel>
                        <AboutInfoValue>{personalInfo.name}</AboutInfoValue>
                    </AboutInfoItem>
                    <AboutInfoItem>
                        <AboutInfoLabel>Email</AboutInfoLabel>
                        <AboutInfoValue>
                            <AboutInfoLink href={`mailto:${personalInfo.email}`}>
                                {personalInfo.email}
                            </AboutInfoLink>
                        </AboutInfoValue>
                    </AboutInfoItem>
                    <AboutInfoItem>
                        <AboutInfoLabel>Local</AboutInfoLabel>
                        <AboutInfoValue>{personalInfo.location}</AboutInfoValue>
                    </AboutInfoItem>
                    <AboutInfoItem>
                        <AboutInfoLabel>GitHub</AboutInfoLabel>
                        <AboutInfoValue>
                            <AboutInfoLink
                                href={personalInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                github.com/Luiz843
                            </AboutInfoLink>
                        </AboutInfoValue>
                    </AboutInfoItem>
                    <AboutInfoItem>
                        <AboutInfoLabel>LinkedIn</AboutInfoLabel>
                        <AboutInfoValue>
                            <AboutInfoLink
                                href={personalInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Ver perfil
                            </AboutInfoLink>
                        </AboutInfoValue>
                    </AboutInfoItem>

                    <DownloadBtn href="#" aria-label="Download CV">
                        Download CV
                    </DownloadBtn>
                </AboutInfoList>
            </AboutGrid>
        </Section>
    );
}
