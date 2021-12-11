import styled from "styled-components";
import {BsMouse} from 'react-icons/bs'

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;

    /* Add :before style */
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    opacity: 0.2;
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;
    margin-top: 10vh;

    animation: grow-and-shrink 2s infinite;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const Color = styled.span`
    color: #fc8c03;
`

export const HeroP = styled.p`
    margin-top: 10vh;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`

export const HeroP1 = styled.p`
    margin-top: 20vh;
    color: #fff;
    font-size: 30px;
`

export const HeroP2 = styled.p`
    font-size: 25px;
    color: #fff;
    margin-top: 30vh;

    @media screen and (max-width: 768px){
        margin-top: 10vh;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`

export const MouseIcon = styled(BsMouse)`
    margin-top: 2vh;    
    color: #fc8c03;
    font-size: 40px;
    animation: pulse 2s infinite;
`