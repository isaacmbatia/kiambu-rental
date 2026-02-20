import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const HowItWorks = () => {
    useEffect(() => {
        document.title = 'How It Works | Kiambu Rental';
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="how-it-works-page">
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
                        How It Works
                    </h1>
                    <p style={{
                        fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                        maxWidth: '700px',
                        margin: '0 auto',
                        opacity: 0.95,
                        lineHeight: 1.6,
                        padding: '0 1rem'
                    }}>
                        Renting a house in Kiambu County has never been easier.
                    </p>
                </div>
            </section>

            <section className="section" style={{ backgroundColor: 'var(--bg-light)' }}>
                <div className="container">
                    <div className="responsive-grid" style={{ gap: '2rem' }}>
                        <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>1️⃣</div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>Search for a House</h3>
                            <p style={{ color: 'var(--text-light)' }}>Browse our verified listings and filter by location, price, or property type to find the perfect house for you.</p>
                        </div>
                        <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>2️⃣</div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>View Details</h3>
                            <p style={{ color: 'var(--text-light)' }}>Click on a listing to view photos, amenities, deposit requirements, and nearby landmarks.</p>
                        </div>
                        <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>3️⃣</div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>Contact the Landlord</h3>
                            <p style={{ color: 'var(--text-light)' }}>Use the WhatsApp or Call button to contact the landlord or admin directly. No middlemen, no hidden fees.</p>
                        </div>
                        <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>4️⃣</div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>Move In</h3>
                            <p style={{ color: 'var(--text-light)' }}>Schedule a viewing, sign the agreement, and move into your new home in Kiambu County safely.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default HowItWorks;
