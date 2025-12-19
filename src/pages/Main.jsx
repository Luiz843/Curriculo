import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import { MainContent } from "./Main.styles";
import About from "./sections/About";
import Resume from "./sections/Resume";
import Services from "./sections/Services";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

export default function Main() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <>
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            <Navbar isOpen={isOpen}/>

        <MainContent open={isOpen}>
            <About />
            <Resume />
            <Services />
            <Skills />
            <Projects />
            <Contact />
        </MainContent>

        </>
    )
}