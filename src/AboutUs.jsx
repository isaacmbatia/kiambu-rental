import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const AboutUs = () => {
    useEffect(() => {
        document.title = 'About Us | Kiambu Rental - Trusted House Rentals in Kiambu County, Kenya';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Learn about Kiambu Rental - your trusted platform for finding verified rental houses in Kiambu County, Kenya. We connect tenants with landlords in Ruaka, Ruiru, Kikuyu, Limuru, and Kiambu Town.');
        }
    }, []);

    return (
        <div className="about-page">
            <Navbar />

            {/* Hero Section */}
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
                        About Kiambu Rental
                    </h1>
                    <p style={{
                        fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                        maxWidth: '700px',
                        margin: '0 auto',
                        opacity: 0.95,
                        lineHeight: 1.6,
                        padding: '0 1rem'
                    }}>
                        Connecting tenants with verified rental houses across Kiambu County, Kenya.
                        Your trusted partner in finding the perfect home.
                    </p>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="section" style={{ backgroundColor: 'var(--bg-light)' }}>
                <div className="container">
                    <div className="about-stats-grid">
                        <div>
                            <h2 style={{
                                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                                fontWeight: 700,
                                color: 'var(--text-dark)',
                                marginBottom: '1.5rem'
                            }}>
                                Our Story
                            </h2>
                            <p style={{
                                color: 'var(--text-light)',
                                lineHeight: 1.8,
                                marginBottom: '1rem',
                                fontSize: 'clamp(0.95rem, 2vw, 1rem)'
                            }}>
                                Kiambu Rental was founded with a simple mission: to make house hunting in
                                <strong> Kiambu County</strong> easier, faster, and more transparent. We understand
                                the challenges tenants face when searching for rental properties in areas like
                                <strong> Ruaka, Ruiru, Kikuyu, Limuru,</strong> and <strong>Kiambu Town</strong>.
                            </p>
                            <p style={{
                                color: 'var(--text-light)',
                                lineHeight: 1.8,
                                marginBottom: '1rem',
                                fontSize: 'clamp(0.95rem, 2vw, 1rem)'
                            }}>
                                From bedsitters and single rooms to spacious 1, 2, and 3-bedroom apartments,
                                we help you find <strong>affordable, verified rental houses</strong> that match
                                your budget and preferences.
                            </p>
                            <p style={{
                                color: 'var(--text-light)',
                                lineHeight: 1.8,
                                fontSize: 'clamp(0.95rem, 2vw, 1rem)'
                            }}>
                                Whether you're a student, young professional, or growing family looking for
                                a <strong>house to rent in Kiambu</strong>, we're here to help you find your
                                next home.
                            </p>
                        </div>
                        <div style={{
                            background: 'linear-gradient(135deg, #16a34a 0%, #14532d 100%)',
                            borderRadius: '1rem',
                            padding: 'clamp(1.5rem, 4vw, 3rem)',
                            color: 'white',
                            textAlign: 'center'
                        }}>
                            <div style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 700, marginBottom: '0.25rem' }}>500+</div>
                            <div style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', opacity: 0.9, marginBottom: '1.5rem' }}>Verified Listings</div>

                            <div style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 700, marginBottom: '0.25rem' }}>1000+</div>
                            <div style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', opacity: 0.9, marginBottom: '1.5rem' }}>Happy Tenants</div>

                            <div style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 700, marginBottom: '0.25rem' }}>5+</div>
                            <div style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', opacity: 0.9 }}>Areas Covered in Kiambu</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section">
                <div className="container">
                    <div className="about-cards-grid">
                        <div style={{
                            backgroundColor: 'white',
                            padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                            borderRadius: '1rem',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                            borderLeft: '4px solid var(--primary)'
                        }}>
                            <div style={{
                                width: '50px',
                                height: '50px',
                                backgroundColor: 'rgba(22, 163, 74, 0.1)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.25rem'
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M12 16v-4"></path>
                                    <path d="M12 8h.01"></path>
                                </svg>
                            </div>
                            <h3 style={{
                                fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                                fontWeight: 700,
                                marginBottom: '0.75rem',
                                color: 'var(--text-dark)'
                            }}>
                                Our Mission
                            </h3>
                            <p style={{ color: 'var(--text-light)', lineHeight: 1.7, fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>
                                To simplify the rental property search in <strong>Kiambu County</strong> by providing
                                a trusted platform that connects tenants with verified landlords.
                            </p>
                        </div>

                        <div style={{
                            backgroundColor: 'white',
                            padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                            borderRadius: '1rem',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                            borderLeft: '4px solid #f59e0b'
                        }}>
                            <div style={{
                                width: '50px',
                                height: '50px',
                                backgroundColor: 'rgba(245, 158, 11, 0.1)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.25rem'
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                            </div>
                            <h3 style={{
                                fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                                fontWeight: 700,
                                marginBottom: '0.75rem',
                                color: 'var(--text-dark)'
                            }}>
                                Our Vision
                            </h3>
                            <p style={{ color: 'var(--text-light)', lineHeight: 1.7, fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>
                                To become the leading <strong>rental property platform in Kenya</strong>,
                                starting with Kiambu County and expanding to other regions.
                            </p>
                        </div>

                        <div style={{
                            backgroundColor: 'white',
                            padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                            borderRadius: '1rem',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                            borderLeft: '4px solid #3b82f6'
                        }}>
                            <div style={{
                                width: '50px',
                                height: '50px',
                                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.25rem'
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    <path d="m9 12 2 2 4-4"></path>
                                </svg>
                            </div>
                            <h3 style={{
                                fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                                fontWeight: 700,
                                marginBottom: '0.75rem',
                                color: 'var(--text-dark)'
                            }}>
                                Our Values
                            </h3>
                            <p style={{ color: 'var(--text-light)', lineHeight: 1.7, fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>
                                <strong>Transparency, Trust, and Convenience</strong> – we verify every listing
                                and ensure direct communication with no hidden charges.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section" style={{ backgroundColor: 'var(--bg-light)' }}>
                <div className="container">
                    <h2 className="section-title">
                        Why Choose Kiambu Rental?
                    </h2>
                    <div className="about-features-grid">
                        {[
                            {
                                icon: '✓',
                                title: 'Verified Listings Only',
                                description: 'Every rental property on our platform is verified. No scams, no fake listings.'
                            },
                            {
                                icon: '📍',
                                title: 'Local Kiambu Expertise',
                                description: 'We specialize in Kiambu County – Ruaka, Ruiru, Kikuyu, Limuru, and Kiambu Town.'
                            },
                            {
                                icon: '💰',
                                title: 'Affordable Options',
                                description: 'Find houses for every budget – from KES 5,000 bedsitters to premium apartments.'
                            },
                            {
                                icon: '📱',
                                title: 'Direct Landlord Contact',
                                description: 'Contact landlords directly via WhatsApp. No agents, no middlemen fees.'
                            },
                            {
                                icon: '🏠',
                                title: 'All Property Types',
                                description: 'Singles, bedsitters, 1BR, 2BR, 3BR apartments, and shops all in one place.'
                            },
                            {
                                icon: '⚡',
                                title: 'Fast & Easy',
                                description: 'Browse listings, filter by location and price, and find your next home in minutes.'
                            }
                        ].map((feature, index) => (
                            <div key={index} style={{
                                backgroundColor: 'white',
                                padding: 'clamp(1.25rem, 3vw, 2rem)',
                                borderRadius: '1rem',
                                textAlign: 'center',
                                boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                            }}>
                                <div style={{
                                    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                                    marginBottom: '0.75rem'
                                }}>
                                    {feature.icon}
                                </div>
                                <h3 style={{
                                    fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                                    fontWeight: 600,
                                    marginBottom: '0.5rem',
                                    color: 'var(--text-dark)'
                                }}>
                                    {feature.title}
                                </h3>
                                <p style={{
                                    color: 'var(--text-light)',
                                    fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                                    lineHeight: 1.6
                                }}>
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Areas We Serve */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">
                        Areas We Serve in Kiambu County
                    </h2>
                    <p style={{
                        textAlign: 'center',
                        color: 'var(--text-light)',
                        maxWidth: '700px',
                        margin: '0 auto 2rem',
                        fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                        lineHeight: 1.7,
                        padding: '0 1rem'
                    }}>
                        We cover all major towns and estates in Kiambu County, helping you find
                        <strong> affordable rental houses</strong> close to your preferred location.
                    </p>
                    <div className="about-areas-grid">
                        {[
                            { name: 'Kiambu Town', desc: 'County headquarters' },
                            { name: 'Ruaka', desc: 'Near Two Rivers' },
                            { name: 'Ruiru', desc: 'Fast-growing town' },
                            { name: 'Kikuyu', desc: 'Quiet residential' },
                            { name: 'Limuru', desc: 'Cool climate' },
                            { name: 'Thika', desc: 'Industrial hub' }
                        ].map((area, index) => (
                            <div key={index} style={{
                                padding: 'clamp(1rem, 2vw, 1.5rem)',
                                backgroundColor: 'white',
                                borderRadius: '0.75rem',
                                border: '2px solid #e5e7eb',
                                textAlign: 'center',
                                transition: 'border-color 0.3s ease'
                            }}>
                                <h3 style={{
                                    fontSize: 'clamp(0.95rem, 2vw, 1.2rem)',
                                    fontWeight: 600,
                                    color: 'var(--text-dark)',
                                    marginBottom: '0.25rem'
                                }}>
                                    {area.name}
                                </h3>
                                <p style={{
                                    fontSize: 'clamp(0.75rem, 1.5vw, 0.9rem)',
                                    color: 'var(--text-light)'
                                }}>
                                    {area.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section style={{
                background: 'linear-gradient(135deg, #16a34a 0%, #14532d 100%)',
                padding: 'clamp(3rem, 8vw, 5rem) 0',
                textAlign: 'center',
                color: 'white'
            }}>
                <div className="container">
                    <h2 style={{
                        fontSize: 'clamp(1.25rem, 4vw, 2.5rem)',
                        fontWeight: 700,
                        marginBottom: '1rem'
                    }}>
                        Ready to Find Your Next Home in Kiambu?
                    </h2>
                    <p style={{
                        fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)',
                        maxWidth: '600px',
                        margin: '0 auto 2rem',
                        opacity: 0.95,
                        padding: '0 1rem'
                    }}>
                        Browse hundreds of verified rental houses in Kiambu County today.
                    </p>
                    <div className="cta-buttons">
                        <Link to="/" className="btn" style={{
                            backgroundColor: 'white',
                            color: 'var(--primary)',
                            padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem)',
                            fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                            fontWeight: 600
                        }}>
                            Browse Houses
                        </Link>
                        <a
                            href="https://wa.me/254735047202?text=I%20want%20to%20list%20my%20house"
                            className="btn"
                            style={{
                                backgroundColor: 'transparent',
                                color: 'white',
                                border: '2px solid white',
                                padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem)',
                                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                                fontWeight: 600
                            }}
                            target="_blank"
                            rel="noreferrer"
                        >
                            List Your Property
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutUs;
