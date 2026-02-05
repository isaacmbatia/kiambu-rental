import React from 'react';

const Hero = () => {
    return (
        <div className="section" style={{ backgroundColor: 'var(--bg-light)', padding: '6rem 0', textAlign: 'center' }}>
            <div className="container">
                <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--text-dark)', lineHeight: 1.2 }}>
                    Have a Vacant House in Kiambu?
                </h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-light)', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                    Send us photos and details on WhatsApp. We'll verify and post it for free.
                </p>
                <div>
                    <a
                        href="https://wa.me/254735047202?text=Hi,%20I%20have%20a%20vacant%20house%20to%20list"
                        className="btn btn-primary"
                        style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.75rem' }}>
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        Send House Details Now
                    </a>
                    <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--text-light)' }}>
                        Response time: Within 2 hours
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
