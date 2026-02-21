import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#14532d', color: 'white', padding: '4rem 0 2rem' }}>
            <div className="container">
                <div className="footer-grid" style={{ marginBottom: '3rem' }}>

                    {/* Brand & Description */}
                    <div>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <Link to="/">
                                <img
                                    src={`${import.meta.env.BASE_URL}footer-logo-new.jpeg`}
                                    alt="Kiambu Rental"
                                    className="footer-logo"
                                    style={{ display: 'block', mixBlendMode: 'screen' }}
                                />
                            </Link>
                        </div>
                        <p style={{ color: '#d1d5db', marginBottom: '2rem', fontSize: '1rem', lineHeight: 1.6 }}>
                            Verified vacant houses in Kiambu County. Find your next home easily.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <Link
                                to="/landlord-terms"
                                className="btn"
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
                                    transition: 'transform 0.2s',
                                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                WhatsApp Us
                            </Link>
                            <Link
                                to="/landlord-terms"
                                className="btn"
                                style={{
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    color: 'white',
                                    padding: '0.6rem 1.2rem',
                                    fontSize: '0.95rem',
                                    borderRadius: '0.5rem',
                                    fontWeight: '600',
                                    border: '1px solid rgba(255,255,255,0.2)',
                                    transition: 'background-color 0.2s'
                                }}
                            >
                                Subscribe
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.25rem' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '0.8rem' }}>
                                <a href="/#listings" style={{ color: '#d1d5db', fontSize: '0.95rem', transition: 'color 0.2s' }}>Vacant Houses</a>
                            </li>
                            <li style={{ marginBottom: '0.8rem' }}>
                                <Link to="/how-it-works" style={{ color: '#d1d5db', fontSize: '0.95rem', transition: 'color 0.2s' }}>How It Works</Link>
                            </li>
                            <li style={{ marginBottom: '0.8rem' }}>
                                <Link to="/about" style={{ color: '#d1d5db', fontSize: '0.95rem', transition: 'color 0.2s' }}>About Us</Link>
                            </li>
                            <li style={{ marginBottom: '0.8rem' }}>
                                <Link to="/contact" style={{ color: '#d1d5db', fontSize: '0.95rem', transition: 'color 0.2s' }}>Contact</Link>
                            </li>
                            <li style={{ marginBottom: '0.8rem' }}>
                                <Link to="/landlord-terms" style={{ color: '#d1d5db', fontSize: '0.95rem', transition: 'color 0.2s' }}>List Your House</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Areas */}
                    <div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.25rem' }}>Areas</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '0.8rem', color: '#d1d5db', fontSize: '0.95rem' }}>Kiambu Town</li>
                            <li style={{ marginBottom: '0.8rem', color: '#d1d5db', fontSize: '0.95rem' }}>Ruaka</li>
                            <li style={{ marginBottom: '0.8rem', color: '#d1d5db', fontSize: '0.95rem' }}>Ruiru</li>
                            <li style={{ marginBottom: '0.8rem', color: '#d1d5db', fontSize: '0.95rem' }}>Kikuyu</li>
                            <li style={{ marginBottom: '0.8rem', color: '#d1d5db', fontSize: '0.95rem' }}>Limuru</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div id="contact">
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.25rem' }}>Contact</h4>
                        <div style={{ marginBottom: '1.2rem', color: '#d1d5db', display: 'flex', alignItems: 'center', fontSize: '0.95rem' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.75rem', flexShrink: 0 }}>
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            <a href="tel:+254735047202" style={{ color: '#d1d5db', textDecoration: 'none' }}>+254 735 047 202</a>
                        </div>
                    </div>

                </div>

                {/* Copyright */}
                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '2rem',
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
