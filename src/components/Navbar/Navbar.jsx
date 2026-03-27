/**
 * @file Navbar.jsx
 * @description Barra de navegação fixa no topo. Em desktop acompanha a largura
 *              da Sidebar; em mobile (≤768px) ocupa 100% e exibe botão hamburguer
 *              que abre/fecha a Sidebar.
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 1.0.0
 */

import React from "react";
import {
    NavbarContainer,
    Title,
    NavContainer,
    NavLink,
    HamburgerBtn,
    HamburgerLine,
} from "./Navbar.styles";
import { personalInfo } from "../../data/resume";

/**
 * @description Navbar fixa com links de âncora e botão hamburguer em mobile.
 * @param {{ isOpen: boolean, setIsOpen: Function }} props
 * @returns {JSX.Element} Elemento React renderizado
 */
export default function Navbar({ isOpen, setIsOpen }) {
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(!isOpen);
        }
    };

    return (
        <NavbarContainer open={isOpen} role="banner">
            <Title>{personalInfo.name}</Title>

            <NavContainer aria-label="Navegação principal">
                <NavLink href="#sobre">Sobre</NavLink>
                <NavLink href="#curriculo">Currículo</NavLink>
                <NavLink href="#servicos">Serviços</NavLink>
                <NavLink href="#habilidades">Habilidades</NavLink>
                <NavLink href="#projetos">Projetos</NavLink>
                <NavLink href="#contato">Contato</NavLink>
            </NavContainer>

            {/* Botão hamburguer — visível somente em mobile (CSS: display:none no desktop) */}
            <HamburgerBtn
                onClick={() => setIsOpen(!isOpen)}
                onKeyDown={handleKeyDown}
                aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
                aria-expanded={isOpen}
                aria-controls="sidebar"
            >
                <HamburgerLine open={isOpen} />
                <HamburgerLine open={isOpen} />
                <HamburgerLine open={isOpen} />
            </HamburgerBtn>
        </NavbarContainer>
    );
}
