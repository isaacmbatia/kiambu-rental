import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#0f3d20', color: 'white', padding: '3rem 0 1.5rem', borderTop: '3px solid #1a6334' }}>
            <div className="container">
                <div className="footer-grid" style={{ marginBottom: '2rem' }}>

                    {/* Brand & Description & Actions */}
                    <div className="footer-brand-col">
                        <div style={{ marginBottom: '1.2rem', marginTop: '-1.5rem' }}>
                            <Link to="/">
                                <img
                                    src={`${import.meta.env.BASE_URL}footer-logo-transparent.png`}
                                    alt="Kiambu Rental"
                                    className="footer-logo"
                                    style={{ display: 'block', transform: 'translateX(-12px)' }}
                                />
                            </Link>
                        </div>
                        <p style={{ color: '#d1d5db', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '420px' }}>
                            Verified vacant houses in Kiambu County. Find your next home easily.
                        </p>

                        {/* Contact, WhatsApp, Subscribe in one line */}
                        <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', alignItems: 'center' }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: '0.95rem',
                                fontWeight: '600',
                                backgroundColor: 'rgba(255,255,255,0.06)',
                                padding: '0.6rem 1rem',
                                borderRadius: '0.5rem',
                                border: '1px solid rgba(255,255,255,0.1)',
                                transition: 'all 0.2s'
                            }} className="hover-lift">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem' }}>
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                                <a href="tel:+254735047202" style={{ color: 'white', textDecoration: 'none' }}>+254 735 047 202</a>
                            </div>
                            <Link
                                to="/landlord-terms"
                                className="btn hover-lift"
                                style={{
                                    backgroundColor: '#25D366',
                                    color: 'white',
                                    padding: '0.6rem 1.2rem',
                                    fontSize: '0.95rem',
                                    borderRadius: '0.5rem',
                                    fontWeight: '600',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    boxShadow: '0 4px 10px rgba(37, 211, 102, 0.25)'
                                }}
                            >
                                WhatsApp Us
                            </Link>
                            <Link
                                to="/landlord-terms"
                                className="btn hover-lift"
                                style={{
                                    backgroundColor: 'transparent',
                                    color: 'white',
                                    padding: '0.6rem 1.2rem',
                                    fontSize: '0.95rem',
                                    borderRadius: '0.5rem',
                                    fontWeight: '600',
                                    border: '1px solid rgba(255,255,255,0.3)',
                                }}
                            >
                                Subscribe
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-links-col">
                        <h4 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '1.2rem', color: 'white', letterSpacing: '0.5px' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '0.8rem' }}>
                                <a href="/#listings" className="footer-link">Vacant Houses</a>
                            </li>
                            <li style={{ marginBottom: '0.8rem' }}>
                                <Link to="/how-it-works" className="footer-link">How It Works</Link>
                            </li>
                            <li style={{ marginBottom: '0.8rem' }}>
                                <Link to="/about" className="footer-link">About Us</Link>
                            </li>
                            <li style={{ marginBottom: '0.8rem' }}>
                                <Link to="/contact" className="footer-link">Contact</Link>
                            </li>
                            <li style={{ marginBottom: '0.8rem' }}>
                                <Link to="/landlord-terms" className="footer-link">List Your House</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Areas */}
                    <div className="footer-links-col">
                        <h4 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '1.2rem', color: 'white', letterSpacing: '0.5px' }}>Areas</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '0.8rem' }}><span className="footer-link cursor-default">Kiambu Town</span></li>
                            <li style={{ marginBottom: '0.8rem' }}><span className="footer-link cursor-default">Ruaka</span></li>
                            <li style={{ marginBottom: '0.8rem' }}><span className="footer-link cursor-default">Ruiru</span></li>
                            <li style={{ marginBottom: '0.8rem' }}><span className="footer-link cursor-default">Kikuyu</span></li>
                            <li style={{ marginBottom: '0.8rem' }}><span className="footer-link cursor-default">Limuru</span></li>
                        </ul>
                    </div>

                </div>

                {/* Copyright */}
                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.08)',
                    paddingTop: '1.5rem',
                    textAlign: 'center',
                    color: '#9ca3af',
                    fontSize: '0.85rem'
                }}>
                    &copy; {new Date().getFullYear()} Kiambu Rental. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
