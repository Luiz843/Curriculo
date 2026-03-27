/**
 * @file Skills.jsx
 * @description Seção de habilidades com barras de progresso animadas via
 *              IntersectionObserver ao entrar na viewport.
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 2.0.0
 */

import React, { useEffect, useRef, useState } from "react";
import Section from "../../components/Section/Section";
import {
    SkillsColumns,
    SkillItem,
    SkillHeader,
    SkillName,
    SkillPercent,
    SkillBarTrack,
    SkillProgressBar,
} from "./Skills.styles";
import { skillBars } from "../../data/resume";

/**
 * @description Seção de habilidades com barras de progresso animadas.
 * @returns {JSX.Element} Elemento React renderizado
 */
export default function Skills() {
    const [animate, setAnimate] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
            { threshold: 0.2 },
        );
        observer.observe(el);
        return () => observer.unobserve(el);
    }, []);

    const half = Math.ceil(skillBars.length / 2);
    const columns = [skillBars.slice(0, half), skillBars.slice(half)];

    return (
        <Section id="habilidades" title="Habilidades" sectionLabel="— Habilidades —" backgroundColor="#1a1a1a">
            <SkillsColumns ref={ref}>
                {columns.map((col, ci) => (
                    <div key={ci}>
                        {col.map(({ name, percent }) => (
                            <SkillItem key={name} data-testid="skill-tag">
                                <SkillHeader>
                                    <SkillName>{name}</SkillName>
                                    <SkillPercent>{percent}%</SkillPercent>
                                </SkillHeader>
                                <SkillBarTrack>
                                    <SkillProgressBar
                                        style={{ width: animate ? `${percent}%` : "0%" }}
                                    />
                                </SkillBarTrack>
                            </SkillItem>
                        ))}
                    </div>
                ))}
            </SkillsColumns>
        </Section>
    );
}
