import { useState, useEffect } from 'react';
import {NavLink} from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import styles from './Navbar.module.css';

function NavbarCustom() {
    const [scrolled, setScrolled] = useState(false);
    const scrollHandle = ()=>setScrolled(window.scrollY > 100);

    useEffect(() => {
    window.addEventListener('scroll', scrollHandle);
    // return ()=>window.removeEventListener('scroll', scrollHandle);
    }, [])

    return (
            <Navbar className={`${styles.navBarCustom} position-fixed top-0 left-0 right-0 container-fluid z-3 ${scrolled?'':'p-4'}`} expand="lg">
                <Container>
                    <Navbar.Brand className={`${styles.logoCustom} py-2 fs-2`} as={NavLink} to='home'>Start Framework</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav"> 
                        <Nav className="ms-auto">
                            <Nav.Link className={`${styles.navLinkCustom} mx-2`} as={NavLink} to='about'>About</Nav.Link>
                            <Nav.Link className={`${styles.navLinkCustom} mx-2`} as={NavLink} to='portfolio'>Portfolio</Nav.Link>
                            <Nav.Link className={`${styles.navLinkCustom} mx-2`} as={NavLink} to='contact'>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
    }

export default NavbarCustom;