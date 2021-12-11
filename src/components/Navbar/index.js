import React, {useState} from 'react'
import {FaBars} from 'react-icons/fa'
import {
    Nav,
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
} from './NavbarElements'

const Navbar = ({toggle}) => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
        if(window.scrollY >= 40){
            setColorchange(true);
        }
        else{
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return (
        <>
            <Nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
                <NavbarContainer>
                    <NavLogo to="/">
                        Chumi
                    </NavLogo>

                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>

                    <NavMenu>
                        <NavItem>
                            <NavLinks to="strona-glowna">Strona Główna</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="o-mnie">O mnie</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="projekty">Projekty</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="kontakt">Kontakt</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
