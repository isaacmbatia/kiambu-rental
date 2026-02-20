import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
        document.body.classList.remove('menu-open');
    }, [location]);

    // Toggle mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
    };

    // Close menu when clicking a link
    const closeMenu = () => {
        setIsOpen(false);
        document.body.classList.remove('menu-open');
    };

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Kiambu Rental - Verified Houses in Kiambu County" />
                </Link>

                {/* Desktop Menu */}
                <div className="desktop-menu">
                    <Link to="/#listings">Vacant Houses</Link>
                    <Link to="/#how-it-works">How It Works</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/#contact">Contact</Link>
                    <a
                        href="https://wa.me/254735047202?text=I%20want%20to%20list%20my%20house"
                        className="btn btn-primary"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem' }}>
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                        List Your House
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`mobile-menu-btn ${isOpen ? 'open' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>

                {/* Mobile Menu */}
                <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                    <Link to="/#listings" onClick={closeMenu}>Vacant Houses</Link>
                    <Link to="/#how-it-works" onClick={closeMenu}>How It Works</Link>
                    <Link to="/about" onClick={closeMenu}>About Us</Link>
                    <Link to="/#contact" onClick={closeMenu}>Contact</Link>
                    <a
                        href="https://wa.me/254735047202?text=I%20want%20to%20list%20my%20house"
                        className="btn btn-primary"
                        target="_blank"
                        rel="noreferrer"
                        onClick={closeMenu}
                        style={{ marginTop: '1rem' }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem' }}>
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                        List Your House
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
