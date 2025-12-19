import React, {useEffect, useRef} from "react";
import { DivSideBar, SideBarContainer, IconSideBar, IconSideBarClose, BlackDiv, NameTitle } from "./Sidebar.styles";
import Typed from "typed.js";
import Link from "../Link/Link";
import Avatar from "../Avatar/Avatar";

export default function Sidebar({isOpen, setIsOpen}) {

    const toggleOpen = () => setIsOpen(!isOpen);
    const el = useRef(null);
    const typed = useRef(null);

    useEffect(() => {
        if (el.current) {
            typed.current = new Typed(el.current, {
                strings: [
                    'HTML, CSS, JS',
                    'PHP, React, Python',
                    'C, LUA',
                    'Postgre, Oracle, PLSQL',
                ],
                startDelay: 300,
                typeSpeed: 50,
                backSpeed: 50,
                backDelay: 1500,
                loop: true,
                showCursor: false,
            });
        }

        return () => {
            if (typed.current) {
                typed.current.destroy();
            }
        };
    }, []);

    return(
        <div>
            <SideBarContainer open={isOpen}>
                <DivSideBar onClick={toggleOpen}>
                    {
                        isOpen ? <IconSideBarClose /> : <IconSideBar />
                    }
                </DivSideBar>
                <NameTitle open={isOpen}>
                    <Avatar src="/avatar.jpeg" alt="Profile Photo" size="120px" visible={isOpen}/>
                    <h1>Software Developer</h1>
                    <p ref={el}></p>
                </NameTitle>
                <Link url="https://linkedin.com" name="Linkedin" isVisible={isOpen}/>
                <Link url="https://github.com" name="GitHub" isVisible={isOpen}/>
                <Link url="https://wa.me/5554996061862" name="WhattsApp" isVisible={isOpen}/>
            </SideBarContainer>
            <BlackDiv onClick={toggleOpen} open={isOpen} />
        </div>
    )
}