import styled from "styled-components";

const LinkStyled = styled.a`
    background-color: #0000006c;
    color: white;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    letter-spacing: 5px;
    font-size: 1.2rem;
    border-radius: 10px;
    padding: ${props => props.visible ? "1.2rem":""};
    margin: ${props => props.visible ? "1.2rem":""};
    width: ${props => props.visible ? "":"0"};
    transform: perspective(1px) translateZ(0);
    transition: width 0.25s;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        background-color: #ffd100;
        transform: scaleX(0);
        transform-origin: 0 50%;
        transition: transform 0.25s ease-out;
        border-radius: 10px;
    }

    &:hover::before {
        border-radius: 10px;
        transform: scaleX(1);
    }

    &:hover {
        color: #202020;
        transition: color .25s ease-in-out;
    }

`

export default LinkStyled;