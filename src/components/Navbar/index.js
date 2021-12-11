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
    NavBtn,
    NavBtnLink,
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
                            <NavLinks to="uslugi">Usługi</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="omnie">O Mnie</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="cennik">Cennik</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="kontakt">Kontakt</NavLinks>
                        </NavItem>
                    </NavMenu>

                    <NavBtn>
                        <NavBtnLink to="/zakup">Zakup</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
