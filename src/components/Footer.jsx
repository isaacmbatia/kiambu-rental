import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#14532d', color: 'white', padding: '3rem 0 2rem' }}>
            <div className="container">
                <div className="footer-grid" style={{ marginBottom: '2rem' }}>

                    {/* Logo & Description */}
                    <div>
                        <div style={{
                            marginBottom: '1.5rem',
                            backgroundColor: 'white',
                            padding: '0.75rem',
                            borderRadius: '0.5rem',
                            display: 'inline-block'
                        }}>
                            <img
                                src={`${import.meta.env.BASE_URL}logo.png`}
                                alt="Kiambu Rental"
                                className="footer-logo"
                                style={{ display: 'block' }}
                            />
                        </div>
                        <p style={{ color: '#d1d5db', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: 1.6 }}>
                            Verified vacant houses in Kiambu County.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#d1d5db', marginBottom: '0.75rem' }}>
                            Get new listings on WhatsApp
                        </p>
                        <a
                            href="https://wa.me/254735047202"
                            className="btn"
                            style={{
                                backgroundColor: '#25D366',
                                color: 'white',
                                padding: '0.5rem 1rem',
                                fontSize: '0.9rem'
                            }}
                        >
                            Subscribe
                        </a>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.25rem' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '0.6rem' }}>
                                <a href="/#listings" style={{ color: '#d1d5db', fontSize: '0.95rem' }}>Vacant Houses</a>
                            </li>
                            <li style={{ marginBottom: '0.6rem' }}>
                                <Link to="/how-it-works" style={{ color: '#d1d5db', fontSize: '0.95rem' }}>How It Works</Link>
                            </li>
                            <li style={{ marginBottom: '0.6rem' }}>
                                <Link to="/about" style={{ color: '#d1d5db', fontSize: '0.95rem' }}>About Us</Link>
                            </li>
                            <li style={{ marginBottom: '0.6rem' }}>
                                <Link to="/contact" style={{ color: '#d1d5db', fontSize: '0.95rem' }}>Contact</Link>
                            </li>
                            <li style={{ marginBottom: '0.6rem' }}>
                                <a href="https://wa.me/254735047202" style={{ color: '#d1d5db', fontSize: '0.95rem' }}>List Your House</a>
                            </li>
                        </ul>
                    </div>

                    {/* Areas */}
                    <div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.25rem' }}>Areas</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '0.6rem', color: '#d1d5db', fontSize: '0.95rem' }}>Kiambu Town</li>
                            <li style={{ marginBottom: '0.6rem', color: '#d1d5db', fontSize: '0.95rem' }}>Ruaka</li>
                            <li style={{ marginBottom: '0.6rem', color: '#d1d5db', fontSize: '0.95rem' }}>Ruiru</li>
                            <li style={{ marginBottom: '0.6rem', color: '#d1d5db', fontSize: '0.95rem' }}>Kikuyu</li>
                            <li style={{ marginBottom: '0.6rem', color: '#d1d5db', fontSize: '0.95rem' }}>Limuru</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div id="contact">
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.25rem' }}>Contact</h4>
                        <div style={{ marginBottom: '1rem', color: '#d1d5db', display: 'flex', alignItems: 'center', fontSize: '0.95rem' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem', flexShrink: 0 }}>
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            <a href="tel:+254735047202" style={{ color: '#d1d5db' }}>+254 735 047 202</a>
                        </div>
                        <div style={{ marginBottom: '1rem', color: '#d1d5db', display: 'flex', alignItems: 'center', fontSize: '0.95rem' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem', flexShrink: 0 }}>
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                            </svg>
                            <a
                                href="https://wa.me/254735047202"
                                style={{ color: '#d1d5db' }}
                                target="_blank"
                                rel="noreferrer"
                            >
                                WhatsApp Us
                            </a>
                        </div>
                    </div>

                </div>

                {/* Copyright */}
                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '1.5rem',
                    textAlign: 'center',
                    color: '#9ca3af',
                    fontSize: '0.875rem'
                }}>
                    &copy; {new Date().getFullYear()} Kiambu Rental. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
