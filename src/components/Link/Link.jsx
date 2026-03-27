import React from "react";
import LinkStyled from "./Link.styles";

export default function Link({name, url, isVisible}) {
    return(
        <LinkStyled href={url ? url : "#"} target="_blank" visible={isVisible}> {isVisible ? name : ""} </LinkStyled>
    )

}