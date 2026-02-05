import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar" style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: 'white', position: 'sticky', top: 0, zIndex: 1000 }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '90px' }}>
                <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <img src="/logo.png" alt="Kiambu Rental" style={{ height: '150px' }} />
                </a>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <a href="#listings" style={{ fontWeight: 500 }}>Vacant Houses</a>
                    <a href="#how-it-works" style={{ fontWeight: 500 }}>How It Works</a>
                    <a href="#contact" style={{ fontWeight: 500 }}>Contact</a>
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
            </div>
        </nav>
    );
};

export default Navbar;
