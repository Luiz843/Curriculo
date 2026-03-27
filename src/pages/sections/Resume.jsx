/**
 * @file Resume.jsx
 * @description Seção de currículo com linha do tempo de experiências
 *              profissionais e bloco de formação acadêmica, dados centralizados
 *              em resume.js.
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 1.0.0
 */

import React from "react";
import Section from "../../components/Section/Section";
import { experiences, education } from "../../data/resume";
import {
    ResumeGrid,
    ResumeBlockTitle,
    Timeline,
    TimelineItem,
    TimelineDate,
    TimelineCompany,
    TimelineRole,
    TimelineLocation,
    EducationCard,
    EducationCourse,
    EducationInstitution,
    EducationStatus,
} from "./Resume.styles";

/**
 * @description Seção de currículo com timeline e formação.
 * @returns {JSX.Element} Elemento React renderizado
 */
export default function Resume() {
    return (
        <Section title="Currículo" id="curriculo">
            <ResumeGrid>
                {/* Coluna esquerda — Experiências */}
                <div>
                    <ResumeBlockTitle>Experiência Profissional</ResumeBlockTitle>
                    <Timeline>
                        {experiences.map(({ start, end, company, role, location }) => (
                            <TimelineItem key={company}>
                                <TimelineDate>{`${start} - ${end}`}</TimelineDate>
                                <TimelineCompany>{company}</TimelineCompany>
                                <TimelineRole>{role}</TimelineRole>
                                {location && (
                                    <TimelineLocation>{location}</TimelineLocation>
                                )}
                            </TimelineItem>
                        ))}
                    </Timeline>
                </div>

                {/* Coluna direita — Formação */}
                <div>
                    <ResumeBlockTitle>Formação Acadêmica</ResumeBlockTitle>
                    {education.map(({ course, institution, status }) => (
                        <EducationCard key={course}>
                            <EducationCourse>{course}</EducationCourse>
                            <EducationInstitution>{institution}</EducationInstitution>
                            <EducationStatus>{status}</EducationStatus>
                        </EducationCard>
                    ))}
                </div>
            </ResumeGrid>
        </Section>
    );
}
