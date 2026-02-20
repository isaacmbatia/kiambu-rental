import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Features = () => {
    const steps = [
        {
            id: 1,
            title: "Landlord Sends Details",
            desc: "Property owners WhatsApp photos and house info to our admin",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
            )
        },
        {
            id: 2,
            title: "We Verify Vacancy",
            desc: "Our team confirms the house is actually vacant and details are accurate",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
            )
        },
        {
            id: 3,
            title: "We Post Online",
            desc: "Verified listings appear on the website within 24 hours",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
            )
        },
        {
            id: 4,
            title: "Tenants Contact Us",
            desc: "House hunters reach out via WhatsApp or call to arrange viewing",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
            )
        }
    ];

    return (
        <div className="section" id="how-it-works" style={{ backgroundColor: '#14532d', color: 'white' }}>
            <div className="container">
                <h2 className="section-title" style={{ color: 'white' }}>How Kiambu Rental Works</h2>

                <div className="responsive-grid">
                    {steps.map(step => (
                        <div key={step.id} style={{ textAlign: 'center' }}>
                            <div style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                border: '2px solid white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1.5rem',
                                fontSize: '1.5rem',
                                fontWeight: 'bold'
                            }}>
                                {step.id}
                            </div>
                            <div style={{ marginBottom: '1rem' }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 1rem'
                                }}>
                                    {step.icon}
                                </div>
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>{step.title}</h3>
                            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem' }}>{step.desc}</p>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <Link
                        to="/landlord-terms"
                        className="btn"
                        style={{ backgroundColor: '#f97316', color: 'white', border: 'none', padding: '1rem 2.5rem', fontSize: '1.1rem' }}
                    >
                        List Your Vacant House — Read Terms First
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Features;
