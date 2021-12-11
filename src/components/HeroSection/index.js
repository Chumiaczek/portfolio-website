import React, {useState, useEffect} from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElement'
import Aos from "aos"
import { ParallaxProvider, Parallax } from "react-scroll-parallax"
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

    if (window.matchMedia('(min-device-width: 768px)').matches){
        return(
            <HeroContainer id="home">
                <HeroBg>
                    <ParallaxProvider>
                        <Parallax y={[-100, 100]} tagOuter="figure">
                            <VideoBg autoPlay loop muted src={require('../../videos/video.mp4')} type='video/mp4' />
                        </Parallax>
                    </ParallaxProvider>
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

    else{
        return(
            <HeroContainer id="home">
                <HeroBg>
                            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
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
        
}

export default HeroSection
