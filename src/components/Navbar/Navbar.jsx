/**
 * @file Navbar.jsx
 * @description Barra de navegação horizontal fixa no topo. Logo/nome à esquerda,
 *              links à direita, fundo semi-transparente com backdrop blur.
 *              Mobile: hamburguer abre menu dropdown interno.
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 2.0.0
 */

import React, { useState } from "react";
import {
    NavbarContainer,
    NavBrand,
    NavContainer,
    NavLink,
    HamburgerBtn,
    HamburgerLine,
    MobileMenu,
    MobileNavLink,
} from "./Navbar.styles";
import { personalInfo } from "../../data/resume";

/**
 * @description Navbar fixa com links de âncora e menu mobile dropdown.
 * @returns {JSX.Element} Elemento React renderizado
 */
export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const close = () => setMenuOpen(false);

    return (
        <NavbarContainer role="banner">
            <NavBrand>{personalInfo.name}</NavBrand>

            <NavContainer aria-label="Navegação principal">
                <NavLink href="#sobre"       onClick={close}>Sobre</NavLink>
                <NavLink href="#curriculo"   onClick={close}>Currículo</NavLink>
                <NavLink href="#servicos"    onClick={close}>Serviços</NavLink>
                <NavLink href="#habilidades" onClick={close}>Habilidades</NavLink>
                <NavLink href="#projetos"    onClick={close}>Projetos</NavLink>
                <NavLink href="#contato"     onClick={close}>Contato</NavLink>
            </NavContainer>

            <HamburgerBtn
                onClick={() => setMenuOpen(o => !o)}
                aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={menuOpen}
            >
                <HamburgerLine open={menuOpen} />
                <HamburgerLine open={menuOpen} />
                <HamburgerLine open={menuOpen} />
            </HamburgerBtn>

            {menuOpen && (
                <MobileMenu>
                    <MobileNavLink href="#sobre"       onClick={close}>Sobre</MobileNavLink>
                    <MobileNavLink href="#curriculo"   onClick={close}>Currículo</MobileNavLink>
                    <MobileNavLink href="#servicos"    onClick={close}>Serviços</MobileNavLink>
                    <MobileNavLink href="#habilidades" onClick={close}>Habilidades</MobileNavLink>
                    <MobileNavLink href="#projetos"    onClick={close}>Projetos</MobileNavLink>
                    <MobileNavLink href="#contato"     onClick={close}>Contato</MobileNavLink>
                </MobileMenu>
            )}
        </NavbarContainer>
    );
}
