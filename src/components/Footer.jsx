import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                {/* 
                  We structure the DOM into two main halves for Mobile 2-column layout. 
                  On desktop, these halves will flatten out or grid-align into 4 columns using display: contents or custom grid.
                  Actually, providing a direct 2-col wrapper is easiest for mobile.
                */}
                <div className="footer-mobile-grid">

                    {/* LEFT COLUMN: Brand -> Areas */}
                    <div className="footer-col-left">
                        {/* Brand */}
                        <div className="footer-brand-col">
                            <Link to="/" className="footer-brand-text" style={{ display: 'flex', alignItems: 'center', fontSize: '25px', fontWeight: 800, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.5px', textDecoration: 'none', marginBottom: '0.5rem' }}>
                                <img src={`${import.meta.env.BASE_URL}logo-icon.png`} alt="" style={{ height: '32px', marginRight: '10px' }} />
                                KIAMBU RENTAL
                            </Link>
                            <p className="footer-description">
                                Find verified vacant houses in Kiambu County.
                            </p>
                        </div>

                        {/* Areas */}
                        <div className="footer-links-col">
                            <h4 className="footer-heading">Areas</h4>
                            <ul className="footer-list">
                                <li><span className="footer-link cursor-default">Kiambu Town</span></li>
                                <li><span className="footer-link cursor-default">Ruaka</span></li>
                                <li><span className="footer-link cursor-default">Ruiru</span></li>
                                <li><span className="footer-link cursor-default">Kikuyu</span></li>
                                <li><span className="footer-link cursor-default">Limuru</span></li>
                            </ul>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Quick Links -> Contact */}
                    <div className="footer-col-right">
                        {/* Quick Links */}
                        <div className="footer-links-col">
                            <h4 className="footer-heading">Quick Links</h4>
                            <ul className="footer-list">
                                <li><a href="/#listings" className="footer-link">Vacant Houses</a></li>
                                <li><Link to="/how-it-works" className="footer-link">How It Works</Link></li>
                                <li><Link to="/about" className="footer-link">About Us</Link></li>
                                <li><Link to="/contact" className="footer-link">Contact</Link></li>
                                <li><Link to="/landlord-terms" className="footer-link">List Your House</Link></li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="footer-contact-col">
                            <h4 className="footer-heading">Contact</h4>
                            <div className="footer-contact-stack">
                                <a href="tel:+254735047202" className="btn footer-btn footer-btn-phone">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem' }}>
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                    +254 735 047 202
                                </a>
                                <a href="https://wa.me/254735047202" target="_blank" rel="noopener noreferrer" className="btn footer-btn footer-btn-whatsapp">
                                    WhatsApp Us
                                </a>
                                <Link to="/landlord-terms" className="btn footer-btn footer-btn-subscribe">
                                    Subscribe
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Copyright */}
                <div className="footer-bottom">
                    &copy; 2026 Kiambu Rental
                </div>
            </div>
        </footer>
    );
};

export default Footer;
