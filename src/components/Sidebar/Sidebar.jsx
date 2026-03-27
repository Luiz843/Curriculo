/**
 * @file Sidebar.jsx
 * @description Sidebar retrátil com avatar, cargo animado via Typed.js e links
 *              sociais. Mobile: off-canvas controlado pelo botão hamburguer da Navbar.
 *              Acessibilidade: aria-expanded, role="dialog" em mobile, Esc fecha.
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 1.0.0
 */

import React, { useEffect, useRef } from "react";
import {
    DivSideBar,
    SideBarContainer,
    IconSideBar,
    IconSideBarClose,
    BlackDiv,
    NameTitle,
} from "./Sidebar.styles";
import Typed from "typed.js";
import Link from "../Link/Link";
import Avatar from "../Avatar/Avatar";
import { personalInfo, typedStrings } from "../../data/resume";

/**
 * @description Sidebar retrátil controlada por isOpen/setIsOpen.
 * @param {{ isOpen: boolean, setIsOpen: Function }} props
 * @returns {JSX.Element} Elemento React renderizado
 */
export default function Sidebar({ isOpen, setIsOpen }) {
    const toggleOpen = () => setIsOpen(!isOpen);
    const el    = useRef(null);
    const typed = useRef(null);

    /* ── Typed.js ───────────────────────────────────────────────── */
    useEffect(() => {
        if (el.current) {
            typed.current = new Typed(el.current, {
                strings: typedStrings,
                startDelay: 300,
                typeSpeed: 50,
                backSpeed: 50,
                backDelay: 1500,
                loop: true,
                showCursor: false,
            });
        }
        return () => { if (typed.current) typed.current.destroy(); };
    }, []);

    /* ── Esc fecha a sidebar ────────────────────────────────────── */
    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === 'Escape' && isOpen) setIsOpen(false);
        };
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [isOpen, setIsOpen]);

    const handleToggleKey = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleOpen();
        }
    };

    return (
        <div>
            <SideBarContainer
                id="sidebar"
                open={isOpen}
                aria-label="Menu lateral"
                aria-hidden={!isOpen}
            >
                {/* Botão fechar — só renderizado no mobile quando aberto */}
                <DivSideBar
                    open={isOpen}
                    onClick={toggleOpen}
                    onKeyDown={handleToggleKey}
                    aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
                    aria-expanded={isOpen}
                >
                    {isOpen ? <IconSideBarClose aria-hidden="true" /> : <IconSideBar aria-hidden="true" />}
                </DivSideBar>

                <NameTitle open={isOpen}>
                    <Avatar
                        src="/avatar.jpeg"
                        alt={`Foto de perfil de ${personalInfo.name}`}
                        size="120px"
                        visible={isOpen}
                    />
                    <h1>{personalInfo.role}</h1>
                    <p ref={el} aria-live="polite"></p>
                </NameTitle>

                <Link url={personalInfo.linkedin} name="LinkedIn"  isVisible={isOpen} />
                <Link url={personalInfo.github}   name="GitHub"    isVisible={isOpen} />
                <Link url="https://wa.me/5554996061862" name="WhatsApp" isVisible={isOpen} />
            </SideBarContainer>

            {/* Overlay escuro — fecha a sidebar ao clicar fora */}
            <BlackDiv
                onClick={toggleOpen}
                open={isOpen}
                role="button"
                tabIndex={isOpen ? 0 : -1}
                aria-label="Fechar menu"
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleOpen(); }}
            />
        </div>
    );
}
