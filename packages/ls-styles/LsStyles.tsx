import styled from "styled-components";

export const font = "Helvetica";
export const H2 = styled.h2`
    font-size:24px;
    margin: 10px 0 20px 0;
    color: light-blue; // use var here
    `
export const H3 = styled.h3`
    font-size:18px;
    margin: 0;
    `

export const P = styled.p`
    font-size:14px;
    margin: 0;
    `
export const UL = styled.ul`
    list-style-type: none;
    margin: 0 10px;
    padding: 0;
    `

export const LI = styled.li`
    margin: 10px;
    `

export const HeroOverlay = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    `
export const ImageDescription = styled.div`
    `
export const ImageAndOverlay = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ImageOverlayContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    `
export const ImageOverlay = styled.div`
    margin: 20px;
    color: rgb(255,255,255);
`
