import React from "react";
import Section from "../../components/Section/Section";
import { AboutContent, AboutText, AboutImage } from "./About.styles";

export default function About() {
    return (
        <Section id="sobre" title="Titulo!!">
            <AboutContent>
                <AboutText>
                    <p>
                        Oii meu nome é Bruce!!
                        OII BRUCE !!
                    </p>
                </AboutText>
            </AboutContent>
        </Section>
    );
}