import React from "react";
import { SectionContainer, SectionTitle } from "./Section.styles";

export default function Section({ id, title, children, backgroundColor }) {
    return (
        <SectionContainer id={id} backgroundColor={backgroundColor}>
            {title && <SectionTitle>{title}</SectionTitle>}
            {children}
        </SectionContainer>
    );
}