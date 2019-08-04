import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import {
    Navbar,
    NavbarBrand,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    NavbarToggler
} from 'reactstrap'

import './styles.css'


const Header = () => {
    const [open, setOpen] = useState(false)    

    const toggle = () => {
        setOpen(!open)
    }    
    
    const isActive = path => {
        const baseURL = `${window.location.protocol}//${window.location.host}`
        
        if (window.location.href === `${baseURL}/${path}`) {   
            return 'active'
        }
    }

    return (        
        <Navbar dark color="dark" expand='md' id="navbar">
            <NavbarBrand tag={Link} to='/' id="logo" className="ml-4 py-0">
                Minhas Séries
            </NavbarBrand>

            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={open} navbar>
                <Nav className="ml-auto px-4" navbar >
                    <NavItem onClick={toggle}>
                        <NavLink 
                            id={"navitem"} 
                            tag={Link} 
                            to="/" 
                            className={isActive('')}>
                            Início
                        </NavLink>
                    </NavItem>
                    <NavItem onClick={toggle}>
                        <NavLink 
                            id="navitem" 
                            tag={Link} 
                            to="/series" 
                            className={isActive('series')}>
                            Séries
                        </NavLink>
                    </NavItem>
                    <NavItem onClick={toggle}>
                        <NavLink 
                            id="navitem" 
                            tag={Link} 
                            to="/generos" 
                            className={isActive('generos')}>
                            Gêneros
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header;