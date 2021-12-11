import React, {useState, useEffect} from 'react'
import { Button } from '../ButtonElement'
import Aos from "aos"
import Photo from "../../images/image1.jpg"
import "aos/dist/aos.css"
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroBtnWrapper,
    HeroContent,
    HeroH1,
    HeroP,
    ArrowForward,
    ArrowRight,
} from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    useEffect(() => {
        Aos.init({ duration: 2000 })
        }, [])

        return(
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg src={Photo}/>
            </HeroBg>
            <HeroContent data-aos="fade-up">
                <HeroH1>Nowoczesne strony WWW</HeroH1>
                <HeroP>
                    Przygotuj się na nowe oblicze twojej strony!
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="/zakup" onMouseEnter={onHover} onMouseLeave={onHover} primary="false">
                        Zakup stronę już dziś {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>   
        </HeroContainer>
        )
    }

export default HeroSection
