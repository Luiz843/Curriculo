/**
 * @file About.jsx
 * @description Seção "Sobre mim" — exibe nome, cargo, localização e bio
 *              a partir de personalInfo centralizado em resume.js.
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 1.0.0
 */

import React from "react";
import Section from "../../components/Section/Section";
import { AboutContent, AboutText } from "./About.styles";
import { personalInfo } from "../../data/resume";

/**
 * @description Seção sobre mim com dados de personalInfo.
 * @returns {JSX.Element} Elemento React renderizado
 */
export default function About() {
    return (
        <Section id="sobre" title="Sobre Mim">
            <AboutContent>
                <AboutText>
                    <h3>{personalInfo.name}</h3>
                    <p>{personalInfo.role}</p>
                    <p>{personalInfo.location}</p>
                    <p>{personalInfo.bio}</p>
                </AboutText>
            </AboutContent>
        </Section>
    );
}
