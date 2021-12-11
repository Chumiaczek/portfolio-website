import React, {useEffect} from 'react'
import Aos from "aos"
import Photo from "../../images/image1.jpg"
import "aos/dist/aos.css"
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroP1,
    HeroP2,
    MouseIcon,
    Color,
} from './HeroElements'

const HeroSection = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
        }, [])

        return(
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg src={Photo}/>
            </HeroBg>
            <HeroContent>
                <HeroP1 data-aos="fade-down">
                    Cześć, nazywam się:
                </HeroP1>
                <HeroH1 data-aos="zoom-in-up" data-aos-delay="1000">Grzegorz <Color>(Chumi)</Color> Tabat</HeroH1>
                <HeroP data-aos="zoom-up" data-aos-delay="1600">
                    Na tej stronie znajdziesz wszystko o <Color>mnie</Color>!
                </HeroP>
                <HeroP2 data-aos="zoom-in" data-aos-delay="2000">Zjedź niżej</HeroP2>
                <MouseIcon data-aos="fade-up" data-aos-delay="2600"></MouseIcon>
            </HeroContent>   
        </HeroContainer>
        )
    }

export default HeroSection
