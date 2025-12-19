import React from "react";
import {ImageContainer, ProfileImage} from "./Avatar.styles";

export default function Avatar({ src, alt, size, visible }) {
    return(
        <ImageContainer size={size} visible={visible}>
            <ProfileImage src={src} alt={alt} />
        </ImageContainer>
    );
}