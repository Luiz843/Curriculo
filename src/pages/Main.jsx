/**
 * @file Main.jsx
 * @description Página principal: orquestra Sidebar, Navbar e todas as seções
 *              de conteúdo. Controla o estado isOpen da Sidebar.
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 1.0.0
 */

import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar  from "../components/Navbar/Navbar";
import { MainContent } from "./Main.styles";
import About    from "./sections/About";
import Resume   from "./sections/Resume";
import Services from "./sections/Services";
import Skills   from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact  from "./sections/Contact";

/**
 * @description Página raiz — monta layout com sidebar + navbar + seções.
 * @returns {JSX.Element} Elemento React renderizado
 */
export default function Main() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <>
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            <Navbar  isOpen={isOpen} setIsOpen={setIsOpen} />

            <MainContent open={isOpen}>
                <About    />
                <Resume   />
                <Services />
                <Skills   />
                <Projects />
                <Contact  />
            </MainContent>
        </>
    );
}
