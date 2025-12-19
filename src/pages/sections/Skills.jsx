import React from "react";
import Section from "../../components/Section/Section";
import Card from "../../components/Card/Card";
import { SkillsGrid } from "./Skills.styles";

export default function Skills() {
    const skills = [
        { title: "React", description: "Desenvolvimento de interfaces modernas", icon: "⚛️" },
        { title: "JavaScript", description: "Programação web interativa", icon: "💻" },
        { title: "Python", description: "Backend e automação", icon: "🐍" },
        { title: "SQL", description: "Banco de dados relacionais", icon: "🗃️" },
    ];

    return (
        <Section id="habilidades" title="Habilidades" backgroundColor="#2b2b2b">
            <SkillsGrid>
                {skills.map((skill, index) => (
                    <Card
                        key={index}
                        icon={skill.icon}
                        title={skill.title}
                        description={skill.description}
                    />
                ))}
            </SkillsGrid>
        </Section>
    );
}