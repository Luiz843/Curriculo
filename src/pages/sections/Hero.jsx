/**
 * @file Hero.jsx
 * @description Seção hero em full viewport: foto circular, nome, cargo animado
 *              via Typed.js e dois botões de ação.
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 1.0.0
 */

import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import Avatar from "../../components/Avatar/Avatar";
import { personalInfo, heroTypedStrings } from "../../data/resume";
import {
    HeroSection,
    HeroContent,
    HeroName,
    HeroRoleWrapper,
    HeroRole,
    HeroActions,
    HeroBtn,
    HeroBtnOutline,
} from "./Hero.styles";

/**
 * @description Hero section com animação de digitação (Typed.js).
 * @returns {JSX.Element} Elemento React renderizado
 */
export default function Hero() {
    const el    = useRef(null);
    const typed = useRef(null);

    useEffect(() => {
        if (el.current) {
            typed.current = new Typed(el.current, {
                strings:    heroTypedStrings,
                startDelay: 400,
                typeSpeed:  60,
                backSpeed:  40,
                backDelay:  1800,
                loop:       true,
                showCursor: true,
                cursorChar: "|",
            });
        }
        return () => { if (typed.current) typed.current.destroy(); };
    }, []);

    return (
        <HeroSection id="hero">
            <HeroContent>
                <Avatar
                    src={`${import.meta.env.BASE_URL}avatar.jpeg`}
                    alt={`Foto de perfil de ${personalInfo.name}`}
                    size="160px"
                    visible={true}
                />
                <HeroName>{personalInfo.name}</HeroName>
                <HeroRoleWrapper>
                    <HeroRole ref={el} aria-live="polite" />
                </HeroRoleWrapper>
                <HeroActions>
                    <HeroBtn href="#contato">Entrar em contato</HeroBtn>
                    <HeroBtnOutline href="#projetos">Ver projetos</HeroBtnOutline>
                </HeroActions>
            </HeroContent>
        </HeroSection>
    );
}
