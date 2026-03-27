import styled from "styled-components";

export const ImageContainer = styled.div`
    width: ${props => props.size || '150px'};
    height: ${props => props.size || '150px'};
    border-radius: 50%;
    overflow: hidden;
    border: ${props => props.visible ? '3px solid #ffd100' : 'none'};
    margin: 0 auto;
    margin-bottom: ${props => props.visible ? '1rem' : '0'};
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${props => props.visible ? "1" : "0"};
    transition: opacity 0.3s, width 0.5s, height 0.5s;
`

export const ProfileImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
