import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const PrivacyPolicy = () => {
    useEffect(() => {
        document.title = 'Privacy Policy | Kiambu Rental - Trusted House Rentals in Kiambu County, Kenya';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Privacy Policy for Kiambu Rental. Learn how we collect, use, and protect your information when using our rental listing services in Kiambu County.');
        }
        window.scrollTo(0, 0);
    }, []);

    const updatedDate = new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return (
        <div className="privacy-policy-page">
            <Navbar />

            {/* Header Section */}
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
                        Privacy Policy
                    </h1>
                    <p style={{
                        fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                        maxWidth: '700px',
                        margin: '0 auto',
                        opacity: 0.95,
                        lineHeight: 1.6,
                        padding: '0 1rem'
                    }}>
                        Last updated: {updatedDate}
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="section" style={{ backgroundColor: 'var(--bg-light)' }}>
                <div className="container">
                    <div style={{
                        backgroundColor: 'white',
                        padding: 'clamp(1.5rem, 5vw, 3rem)',
                        borderRadius: '1rem',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                        maxWidth: '900px',
                        margin: '0 auto',
                        color: 'var(--text-dark)',
                        lineHeight: 1.8
                    }}>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Welcome to <strong>Kiambu Rental</strong>. Your privacy is important to us. This Privacy Policy document explains what information is collected and how it is used when you visit our website.
                        </p>
                        <p style={{ marginBottom: '2rem' }}>
                            By using this website, you agree to this Privacy Policy.
                        </p>

                        <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', margin: '2rem 0' }} />

                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--primary)' }}>Information We Collect</h2>
                        <p style={{ marginBottom: '1rem' }}>
                            Kiambu Rental may collect personal and non-personal information in the following ways:
                        </p>

                        <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.5rem' }}>Personal Information</h3>
                        <p style={{ marginBottom: '0.5rem' }}>We may collect personal information when users:</p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                            <li>Contact us through forms</li>
                            <li>Submit property inquiries</li>
                            <li>List a property</li>
                            <li>Subscribe to updates</li>
                        </ul>

                        <p style={{ marginBottom: '0.5rem' }}>This information may include:</p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>Name</li>
                            <li>Phone number</li>
                            <li>Email address</li>
                            <li>Any other information you voluntarily provide</li>
                        </ul>

                        <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.5rem' }}>Non-Personal Information</h3>
                        <p style={{ marginBottom: '0.5rem' }}>We automatically collect non-personal information such as:</p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>IP address</li>
                            <li>Browser type</li>
                            <li>Pages visited</li>
                            <li>Date and time of visits</li>
                            <li>Referring URLs</li>
                        </ul>
                        <p style={{ marginBottom: '2rem' }}>
                            This information is used for analytics and website improvement.
                        </p>

                        <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', margin: '2rem 0' }} />

                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--primary)' }}>How We Use Your Information</h2>
                        <p style={{ marginBottom: '1rem' }}>We use collected information to:</p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                            <li>Provide and improve our rental listing services</li>
                            <li>Respond to inquiries and customer support requests</li>
                            <li>Display relevant rental listings</li>
                            <li>Monitor and analyze website usage</li>
                            <li>Prevent fraud and abuse</li>
                        </ul>
                        <p style={{ marginBottom: '2rem' }}>
                            We do not sell, trade, or rent users' personal information to others.
                        </p>

                        <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', margin: '2rem 0' }} />

                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--primary)' }}>Cookies</h2>
                        <p style={{ marginBottom: '1rem' }}>Kiambu Rental uses cookies to:</p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>Store user preferences</li>
                            <li>Improve user experience</li>
                        </ul>
                        <p style={{ marginBottom: '2rem' }}>
                            You can choose to disable cookies through your individual browser options.
                        </p>

                        <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', margin: '2rem 0' }} />

                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--primary)' }}>Data Protection Rights</h2>
                        <p style={{ marginBottom: '1rem' }}>Users have the right to:</p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li>Request access to their personal data</li>
                            <li>Request correction or deletion of their personal data</li>
                            <li>Withdraw consent at any time</li>
                        </ul>
                        <p style={{ marginBottom: '2rem' }}>
                            To exercise these rights, please contact us through the details provided on the website.
                        </p>

                        <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', margin: '2rem 0' }} />

                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--primary)' }}>Children's Information</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Kiambu Rental does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you believe that your child provided this kind of information on our website, please contact us immediately, and we will promptly remove it from our records.
                        </p>

                        <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', margin: '2rem 0' }} />

                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--primary)' }}>Consent</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            By using our website, you hereby consent to our Privacy Policy and agree to its terms.
                        </p>

                        <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', margin: '2rem 0' }} />

                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--primary)' }}>Contact Us</h2>
                        <p style={{ marginBottom: '1rem' }}>
                            If you have any questions about this Privacy Policy or our practices, please contact us via the contact page on this website.
                        </p>
                        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                            <Link to="/contact" className="btn btn-primary">Go to Contact Page</Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
