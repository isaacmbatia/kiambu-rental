import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const LandlordTerms = () => {
    const [agreed, setAgreed] = useState(false);

    useEffect(() => {
        document.title = 'Landlord Listing Terms | Kiambu Rental';
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="terms-page">
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
                        Kiambu Rental
                    </h1>
                    <p style={{
                        fontSize: 'clamp(1.2rem, 3vw, 1.75rem)',
                        maxWidth: '700px',
                        margin: '0 auto',
                        fontWeight: 600,
                        opacity: 0.95,
                        lineHeight: 1.6,
                        padding: '0 1rem',
                        textTransform: 'uppercase'
                    }}>
                        Landlord Listing Terms
                    </p>
                </div>
            </section>

            <section className="section" style={{ backgroundColor: 'var(--bg-light)' }}>
                <div className="container">
                    <div style={{
                        maxWidth: '800px',
                        margin: '0 auto',
                        backgroundColor: 'white',
                        padding: 'clamp(2rem, 5vw, 4rem)',
                        borderRadius: '1rem',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                        lineHeight: '1.8',
                        color: 'var(--text-dark)',
                        position: 'relative'
                    }}>
                        {/* Quick WhatsApp Admin Access Button */}
                        <div style={{ textAlign: 'right', marginBottom: '2rem' }}>
                            <a 
                                href="https://wa.me/254735047202?text=I%20want%20to%20list%20my%20property.%20I%20already%20know%20the%20rules."
                                target="_blank"
                                rel="noreferrer"
                                className="btn" 
                                style={{ 
                                    backgroundColor: '#25D366', // WhatsApp Green
                                    color: 'white', 
                                    fontSize: '0.9rem',
                                    fontWeight: '700',
                                    padding: '0.6rem 1.4rem',
                                    boxShadow: '0 4px 6px rgba(37, 211, 102, 0.2)',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                Chat admin on 
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.4l.-1.7 6.22 6.36-1.66c1.23.6 2.62.9 4.02.9l.05-.01h.001c6.55 0 11.88-5.34 11.89-11.89a11.81 11.81 0 00-3.41-8.41"/>
                                </svg>
                                (I know the rules)
                            </a>
                        </div>
                        <p style={{ fontSize: '1.1rem', marginBottom: '2.5rem', color: 'var(--text-light)', textAlign: 'center' }}>
                            Kiambu Rental provides landlords with a simple and affordable platform to market rental properties and secure tenants efficiently.
                        </p>

                        <div style={{ marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                                <span style={{ backgroundColor: 'var(--primary)', color: 'white', width: '30px', height: '30px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', marginRight: '1rem', fontSize: '1rem' }}>1</span>
                                Listing Fee
                            </h3>
                            <p style={{ paddingLeft: '3rem', color: 'var(--text-light)' }}>
                                Kiambu Rental charges a <strong>one-time, non-refundable listing fee of Kenya Shillings Fifty (KES 50) per property</strong> for inclusion on the Kiambu Rental website.
                            </p>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                                <span style={{ backgroundColor: 'var(--primary)', color: 'white', width: '30px', height: '30px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', marginRight: '1rem', fontSize: '1rem' }}>2</span>
                                Property Promotion
                            </h3>
                            <p style={{ paddingLeft: '3rem', color: 'var(--text-light)', marginBottom: '1rem' }}>
                                Upon listing, Kiambu Rental shall promote the property through:
                            </p>
                            <ul style={{ paddingLeft: '4.5rem', color: 'var(--text-light)', marginBottom: '1rem' }}>
                                <li style={{ marginBottom: '0.5rem' }}>The Kiambu Rental website</li>
                                <li style={{ marginBottom: '0.5rem' }}>Kiambu Rental official Facebook page</li>
                                <li style={{ marginBottom: '0.5rem' }}>Kiambu Rental official TikTok account</li>
                                <li style={{ marginBottom: '0.5rem' }}>Direct marketing through Kiambu Rental’s client and agent contacts</li>
                            </ul>
                            <p style={{ paddingLeft: '3rem', color: 'var(--text-light)' }}>
                                These promotional efforts are intended to increase visibility and attract suitable tenants within the shortest time possible.
                            </p>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                                <span style={{ backgroundColor: 'var(--primary)', color: 'white', width: '30px', height: '30px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', marginRight: '1rem', fontSize: '1rem' }}>3</span>
                                No Landlord Commission
                            </h3>
                            <p style={{ paddingLeft: '3rem', color: 'var(--text-light)' }}>
                                Once a tenant has occupied the property, <strong>no commission or additional charges</strong> shall be payable by the landlord.
                            </p>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                                <span style={{ backgroundColor: 'var(--primary)', color: 'white', width: '30px', height: '30px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', marginRight: '1rem', fontSize: '1rem' }}>4</span>
                                Commission Structure
                            </h3>
                            <p style={{ paddingLeft: '3rem', color: 'var(--text-light)' }}>
                                Kiambu Rental earns its commission <strong>exclusively from tenants</strong> who engage the platform for house-hunting and placement services.
                            </p>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                                <span style={{ backgroundColor: 'var(--primary)', color: 'white', width: '30px', height: '30px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', marginRight: '1rem', fontSize: '1rem' }}>5</span>
                                Bulk Listing Discount
                            </h3>
                            <p style={{ paddingLeft: '3rem', color: 'var(--text-light)' }}>
                                Landlords who list <strong>more than five (5) properties simultaneously</strong> shall be entitled to a <strong>ten percent (10%) discount</strong> on the total listing fees.
                            </p>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                                <span style={{ backgroundColor: 'var(--primary)', color: 'white', width: '30px', height: '30px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', marginRight: '1rem', fontSize: '1rem' }}>6</span>
                                Acceptance of Terms
                            </h3>
                            <p style={{ paddingLeft: '3rem', color: 'var(--text-light)' }}>
                                Submission of a property for listing constitutes full acceptance of these terms and conditions.
                            </p>
                        </div>

                        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                            <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', cursor: 'pointer', marginBottom: '1.5rem', fontSize: '1rem', color: 'var(--text-dark)' }}>
                                <input
                                    type="checkbox"
                                    checked={agreed}
                                    onChange={e => setAgreed(e.target.checked)}
                                    style={{ width: '20px', height: '20px', cursor: 'pointer', accentColor: 'var(--primary)' }}
                                />
                                I have read and understood all the terms and conditions above.
                            </label>
                            <a
                                href={agreed ? "https://wa.me/254735047202?text=I%20have%20read%20and%20accepted%20the%20Kiambu%20Rental%20landlord%20terms.%20I%20want%20to%20list%20my%20house." : undefined}
                                target={agreed ? "_blank" : undefined}
                                rel="noreferrer"
                                onClick={!agreed ? e => e.preventDefault() : undefined}
                                className="btn btn-primary"
                                style={{
                                    padding: '1rem 2.5rem',
                                    fontSize: '1.05rem',
                                    opacity: agreed ? 1 : 0.4,
                                    cursor: agreed ? 'pointer' : 'not-allowed',
                                    pointerEvents: agreed ? 'auto' : 'none'
                                }}
                            >
                                I Agree — List My Property on WhatsApp
                            </a>
                            {!agreed && (
                                <p style={{ marginTop: '0.75rem', fontSize: '0.85rem', color: '#ef4444' }}>Please check the box above to confirm you have read the terms.</p>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default LandlordTerms;
