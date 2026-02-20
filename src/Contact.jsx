import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Contact = () => {
    useEffect(() => {
        document.title = 'Contact Us | Kiambu Rental';
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="contact-page">
            <Navbar />

            <section className="about-hero" style={{
                background: 'linear-gradient(135deg, #14532d 0%, #16a34a 100%)',
                color: 'white',
                textAlign: 'center',
                padding: 'clamp(3rem, 8vw, 5rem) 0'
            }}>
                <div className="container">
                    <h1 style={{
                        fontSize: 'clamp(1.75rem, 5vw, 3.5rem)',
                        fontWeight: 700,
                        marginBottom: '1rem',
                        lineHeight: 1.2
                    }}>
                        Contact Us
                    </h1>
                    <p style={{
                        fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                        maxWidth: '700px',
                        margin: '0 auto',
                        opacity: 0.95,
                        lineHeight: 1.6,
                        padding: '0 1rem'
                    }}>
                        We are here to help you find your dream home in Kiambu County.
                    </p>
                </div>
            </section>

            <section className="section" style={{ backgroundColor: 'var(--bg-light)' }}>
                <div className="container">
                    <div style={{
                        maxWidth: '600px',
                        margin: '0 auto',
                        backgroundColor: 'white',
                        padding: '3rem',
                        borderRadius: '1rem',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
                    }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'var(--text-dark)', textAlign: 'center' }}>Get In Touch</h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ backgroundColor: '#e5e7eb', padding: '1rem', borderRadius: '50%' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 style={{ fontWeight: 'bold', color: 'var(--text-dark)', marginBottom: '0.25rem' }}>Phone</h4>
                                    <a href="tel:+254735047202" style={{ color: 'var(--text-light)' }}>+254 735 047 202</a>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ backgroundColor: '#e5e7eb', padding: '1rem', borderRadius: '50%' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 style={{ fontWeight: 'bold', color: 'var(--text-dark)', marginBottom: '0.25rem' }}>WhatsApp</h4>
                                    <a href="https://wa.me/254735047202" target="_blank" rel="noreferrer" style={{ color: 'var(--text-light)' }}>Click to chat with us</a>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ backgroundColor: '#e5e7eb', padding: '1rem', borderRadius: '50%' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                </div>
                                <div>
                                    <h4 style={{ fontWeight: 'bold', color: 'var(--text-dark)', marginBottom: '0.25rem' }}>Location</h4>
                                    <p style={{ color: 'var(--text-light)' }}>Kiambu County, Kenya</p>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
                            <a href="https://wa.me/254735047202" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ width: '100%' }}>
                                Send us a Message
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Contact;
