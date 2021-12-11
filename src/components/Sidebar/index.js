import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarLink,
    SidebarMenu,
} from './SidebarElements'

const Sidebar = ({toggle, isOpen}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="stronaglowna" onClick={toggle}>Strona Główna</SidebarLink>
                    <SidebarLink to="omnie" onClick={toggle}>O Mnie</SidebarLink>
                    <SidebarLink to="projekty" onClick={toggle}>Projekty</SidebarLink>
                    <SidebarLink to="kontakt" onClick={toggle}>Kontakt</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
