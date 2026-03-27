import styled from "styled-components";

export const AboutContent = styled.div`
    display: flex;
    gap: 3rem;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 2rem;
    }
`

export const AboutImage = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 5px solid #ffd100;
    object-fit: cover;
`

export const AboutText = styled.div`
    flex: 1;
    color: #ffffff;
    font-size: 1.1rem;
    line-height: 1.8;

    p {
        margin-bottom: 1.5rem;
    }
`