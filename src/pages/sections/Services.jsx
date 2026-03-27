/**
 * @file Services.jsx
 * @description Seção de serviços com cards gerados a partir do array services
 *              centralizado em resume.js.
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 2.0.0
 */

import React from "react";
import Section from "../../components/Section/Section";
import { services } from "../../data/resume";
import {
    ServicesGrid,
    ServiceCard,
    ServiceIcon,
    ServiceTitle,
    ServiceDescription,
} from "./Services.styles";

/** Ícones unicode associados ao índice de cada serviço */
const ICONS = ["💻", "🛠️", "📊"];

/**
 * @description Seção de serviços com grid de cards.
 * @returns {JSX.Element} Elemento React renderizado
 */
export default function Services() {
    return (
        <Section title="Serviços" id="servicos" sectionLabel="— O que faço —" backgroundColor="#111111">
            <ServicesGrid>
                {services.map(({ title, description }, index) => (
                    <ServiceCard key={title}>
                        <ServiceIcon aria-hidden="true">{ICONS[index]}</ServiceIcon>
                        <ServiceTitle>{title}</ServiceTitle>
                        <ServiceDescription>{description}</ServiceDescription>
                    </ServiceCard>
                ))}
            </ServicesGrid>
        </Section>
    );
}
