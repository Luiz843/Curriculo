import React from "react";
import {NavbarContainer, NavContainer, NavLink, Title} from "./Navbar.styles";

export default function Navbar({isOpen}) {
    return(
        <NavbarContainer open={isOpen}>
            <Title>Luiz Carlos Polli</Title>
            <NavContainer>
                <NavLink href="#sobre">
                    Sobre mim
                </NavLink>

                <NavLink href="#curriculo">
                    Curriculo
                </NavLink>

                <NavLink href="#servicos">
                    Serviços
                </NavLink>

                <NavLink href="#habilidades">
                    Habilidades
                </NavLink>

                <NavLink href="#projetos">
                    Projetos
                </NavLink>

                <NavLink href="#contato">
                    Contato
                </NavLink>
            </NavContainer>
        </NavbarContainer>
    )
}