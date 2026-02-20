import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const LandlordTerms = () => {
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
                        color: 'var(--text-dark)'
                    }}>
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
                            <a href="https://wa.me/254735047202?text=I%20have%20read%20the%20terms%20and%20want%20to%20list%20my%20house" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                                I Agree, List My Property
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default LandlordTerms;
