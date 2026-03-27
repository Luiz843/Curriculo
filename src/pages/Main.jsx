/**
 * @file Main.jsx
 * @description Página principal: orquestra Navbar e todas as seções de conteúdo.
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 2.0.0
 */

import React from "react";
import Navbar   from "../components/Navbar/Navbar";
import { MainContent } from "./Main.styles";
import Hero     from "./sections/Hero";
import About    from "./sections/About";
import Resume   from "./sections/Resume";
import Services from "./sections/Services";
import Skills   from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact  from "./sections/Contact";

/**
 * @description Página raiz — monta layout com navbar horizontal + seções.
 * @returns {JSX.Element} Elemento React renderizado
 */
export default function Main() {
    return (
        <>
            <Navbar />
            <MainContent>
                <Hero />
                <About />
                <Resume />
                <Services />
                <Skills />
                <Projects />
                <Contact />
            </MainContent>
        </>
    );
}
