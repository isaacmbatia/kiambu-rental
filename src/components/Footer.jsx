import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#14532d', color: 'white', padding: '4rem 0 2rem' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>

                    <div>
                        <div style={{ marginBottom: '1.5rem', backgroundColor: 'white', padding: '1rem', borderRadius: '0.5rem', display: 'inline-block' }}>
                            <img src="/logo.png" alt="Kiambu Rental" style={{ height: '100px', display: 'block' }} />
                        </div>
                        <p style={{ color: '#d1d5db', marginBottom: '1.5rem' }}>
                            Verified vacant houses in Kiambu County.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#d1d5db' }}>
                            Get new listings on WhatsApp
                        </p>
                        <a href="https://wa.me/254735047202" className="btn" style={{ backgroundColor: '#25D366', color: 'white', marginTop: '0.5rem', padding: '0.5rem 1rem' }}>
                            Subscribe
                        </a>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '0.75rem' }}><a href="#listings" style={{ color: '#d1d5db' }}>Vacant Houses</a></li>
                            <li style={{ marginBottom: '0.75rem' }}><a href="#how-it-works" style={{ color: '#d1d5db' }}>How It Works</a></li>
                            <li style={{ marginBottom: '0.75rem' }}><a href="#contact" style={{ color: '#d1d5db' }}>Contact</a></li>
                            <li style={{ marginBottom: '0.75rem' }}><a href="https://wa.me/254735047202" style={{ color: '#d1d5db' }}>List Your House</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem' }}>Areas</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '0.75rem', color: '#d1d5db' }}>Kiambu Town</li>
                            <li style={{ marginBottom: '0.75rem', color: '#d1d5db' }}>Ruaka</li>
                            <li style={{ marginBottom: '0.75rem', color: '#d1d5db' }}>Ruiru</li>
                            <li style={{ marginBottom: '0.75rem', color: '#d1d5db' }}>Kikuyu</li>
                            <li style={{ marginBottom: '0.75rem', color: '#d1d5db' }}>Limuru</li>
                        </ul>
                    </div>

                    <div id="contact">
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem' }}>Contact</h4>
                        <div style={{ marginBottom: '1rem', color: '#d1d5db', display: 'flex', alignItems: 'center' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem' }}>
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            +254 735 047 202
                        </div>
                        <div style={{ marginBottom: '1rem', color: '#d1d5db', display: 'flex', alignItems: 'center' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem' }}>
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                            </svg>
                            +254 735 047 202
                        </div>
                    </div>

                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', color: '#9ca3af', fontSize: '0.875rem' }}>
                    &copy; {new Date().getFullYear()} Kiambu Rental. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
