import React from "react";
import { CardContainer, CardTitle, CardDescription, CardIcon } from "./Card.styles";

export default function Card({ icon, title, description, onClick }) {
    return (
        <CardContainer onClick={onClick}>
            {icon && <CardIcon>{icon}</CardIcon>}
            <CardTitle>{title}</CardTitle>
            {description && <CardDescription>{description}</CardDescription>}
        </CardContainer>
    );
}