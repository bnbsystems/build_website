import React, { useState } from 'react'
import { Link } from 'react-scroll';
import { Link as Link2 } from 'react-router-dom';

import * as Icon from 'react-feather';
import {
    NavbarBrand,
    NavbarToggler,
    NavItem,
    Nav,
    Collapse
} from "reactstrap";
import LanguagePicker from './LanguagePicker';
import { useTranslation } from 'react-i18next';
// Import Logo
// import logodark from "../assets/images/logo-dark.png";
// import logolight from "../assets/images/logo-light.png";


export default function NavbarPage() {
    const [isOpen, setMenu] = useState(true)
    const { t } = useTranslation()
    window.addEventListener("scroll", windowScroll);

    function windowScroll() {
        const navbar = document.getElementById("navbar");
        if (
            document.body.scrollTop >= 50 ||
            document.documentElement.scrollTop >= 50
        ) {
            navbar.classList.add("nav-sticky");
        } else {
            navbar.classList.remove("nav-sticky");
        }
    }
    const toggleMenu = () => {
        setMenu(!isOpen)
    }
    return (
        <>
            <nav id="navbar" className="navbar navbar-expand-lg fixed-top sticky">
                <div className="container">
                    <Link2 to="/">
                        <div class="matrix-logo"  alt="" />
                    </Link2>
                    <NavbarToggler className="navbar-toggler" onClick={toggleMenu}>
                        <Icon.Menu />
                    </NavbarToggler>

                    <Collapse className={`navbar-collapse ${isOpen === true ? 'hidden' : 'show'}`} id="navbarSupportedContent">

                        <Nav className="navbar-nav ms-auto mb-2 mb-lg-0" id="navbar-navlist">
                            <NavItem>
                                <Link activeClass="active" spy={true} smooth={true} duration={500} to="home" className="nav-link" href="#">{t('navbar.home')}</Link>
                            </NavItem>
                            <NavItem>
                                <Link activeClass="active" spy={true} smooth={true} duration={500} to="features" className="nav-link" href="#">{t('navbar.features')}</Link>
                            </NavItem>
                            {/* <NavItem>
                                <Link activeClass="active" spy={true} smooth={true} duration={500} to="pricing" className="nav-link" href="#">Pricing</Link>
                            </NavItem> */}
                            {/* <NavItem>
                                <Link activeClass="active" spy={true} smooth={true} duration={500} to="review" className="nav-link" href="#">Review</Link>
                            </NavItem> */}
                            <NavItem>
                                <Link activeClass="active" spy={true} smooth={true} duration={500} to="blog" className="nav-link" href="#">{t('navbar.articles')}</Link>
                            </NavItem>
                            <NavItem>
                                <Link activeClass="active" spy={true} smooth={true} duration={500} to="contact" className="nav-link" href="#">{t('navbar.contact')}</Link>
                            </NavItem>
                            <LanguagePicker />
                        </Nav>

                        {/* <ul className="list-inline menu-social mb-0 ps-lg-4 ms-2">
                            <li className="list-inline-item"><Link2 to="/auth-login" className="text-dark fw-semibold text-uppercase small">Login</Link2></li>
                            <li className="list-inline-item ms-2"><Link2 to="/auth-signup" className="btn btn-primary text-uppercase">Sign Up</Link2></li>
                        </ul> */}
                    </Collapse>
                </div>
            </nav>
        </>
    )
}