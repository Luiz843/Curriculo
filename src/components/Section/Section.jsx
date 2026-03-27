/**
 * @file Section.jsx
 * @description Container genérico de seção com fade-in ao entrar na viewport
 *              (IntersectionObserver) e label decorativo acima do título.
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 2.0.0
 */

import React, { useEffect, useRef, useState } from "react";
import { SectionContainer, SectionLabel, SectionTitle } from "./Section.styles";

/**
 * @description Seção com fade-in, label decorativo e título centralizado.
 * @param {{ id: string, title: string, children: React.ReactNode, backgroundColor: string, sectionLabel: string }} props
 * @returns {JSX.Element} Elemento React renderizado
 */
export default function Section({ id, title, children, backgroundColor, sectionLabel }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.08 },
        );
        observer.observe(el);
        return () => observer.unobserve(el);
    }, []);

    return (
        <SectionContainer id={id} backgroundColor={backgroundColor} ref={ref} visible={visible}>
            {sectionLabel && <SectionLabel>{sectionLabel}</SectionLabel>}
            {title && <SectionTitle>{title}</SectionTitle>}
            {children}
        </SectionContainer>
    );
}
