/**
 * @file Skills.jsx
 * @description Seção de habilidades — renderiza tags para cada item do array
 *              skills centralizado em resume.js.
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 1.0.0
 */

import React from "react";
import Section from "../../components/Section/Section";
import { SkillsGrid, SkillTag } from "./Skills.styles";
import { skills } from "../../data/resume";

/**
 * @description Seção de habilidades com tags derivadas de resume.js.
 * @returns {JSX.Element} Elemento React renderizado
 */
export default function Skills() {
    return (
        <Section id="habilidades" title="Habilidades" backgroundColor="#2b2b2b">
            <SkillsGrid>
                {skills.map(skill => (
                    <SkillTag key={skill} data-testid="skill-tag">{skill}</SkillTag>
                ))}
            </SkillsGrid>
        </Section>
    );
}
