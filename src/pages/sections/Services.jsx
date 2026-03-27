/**
 * @file Services.jsx
 * @description Seção de serviços com cards gerados a partir do array services
 *              centralizado em resume.js.
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 1.0.0
 */

import React from "react";
import Section from "../../components/Section/Section";
import { services } from "../../data/resume";
import {
    ServicesGrid,
    ServiceCard,
    ServiceTitle,
    ServiceDescription,
} from "./Services.styles";

/** Emojis associados ao índice de cada serviço */
const EMOJIS = ["💻", "🛠️", "📊"];

/**
 * @description Seção de serviços com grid de cards.
 * @returns {JSX.Element} Elemento React renderizado
 */
export default function Services() {
    return (
        <Section title="Serviços" id="servicos">
            <ServicesGrid>
                {services.map(({ title, description }, index) => (
                    <ServiceCard key={title}>
                        <span style={{ fontSize: "2.8rem" }}>{EMOJIS[index]}</span>
                        <ServiceTitle>{title}</ServiceTitle>
                        <ServiceDescription>{description}</ServiceDescription>
                    </ServiceCard>
                ))}
            </ServicesGrid>
        </Section>
    );
}
