import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AdBanner from './components/AdBanner';
import { houses as staticHouses } from './data/houses';

const ListingDetails = () => {
    const { id } = useParams();

    // Find house synchronously to avoid loading flash
    const initialHouse = staticHouses.find(h => h.id.toString() === id);

    const [house, setHouse] = useState(initialHouse || null);
    const [selectedImage, setSelectedImage] = useState(initialHouse ? initialHouse.imageUrl : null);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (!house && initialHouse) {
            setHouse(initialHouse);
            setSelectedImage(initialHouse.imageUrl);
        }
    }, [id, initialHouse, house]);



    if (!house) {
        return (
            <div className="app">
                <Navbar />
                <div className="container section" style={{ textAlign: 'center', minHeight: '60vh' }}>
                    <h2>Listing not found</h2>
                    <Link to="/" className="btn btn-primary" style={{ marginTop: '1rem' }}>Back to Home</Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="app">
            <Navbar />

            <div style={{ backgroundColor: '#f9fafb', paddingBottom: '4rem' }}>

                {/* Breadcrumb / Back Link */}
                <div className="container" style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>
                    <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--text-light)', fontSize: '0.9rem', fontWeight: 500 }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem' }}>
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        Back to Listings
                    </Link>
                </div>

                <div className="container">
                    <div className="listing-layout">

                        {/* Left Column: Images & Details */}
                        <div style={{ backgroundColor: 'white', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>

                            {/* Main Image */}
                            <div style={{ height: '400px', width: '100%', position: 'relative' }}>
                                <img
                                    src={selectedImage || house.imageUrl}
                                    alt={house.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                {house.verified && (
                                    <span style={{ position: 'absolute', top: '20px', left: '20px', backgroundColor: 'var(--primary)', color: 'white', padding: '0.5rem 1rem', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 'bold' }}>
                                        VERIFIED
                                    </span>
                                )}
                            </div>

                            {/* Angle Shots Grid */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem', padding: '1rem' }}>
                                {house.images && house.images.map((img, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setSelectedImage(img)}
                                        style={{
                                            height: '80px',
                                            borderRadius: '0.5rem',
                                            overflow: 'hidden',
                                            cursor: 'pointer',
                                            opacity: selectedImage === img ? 1 : 0.6,
                                            border: selectedImage === img ? '3px solid var(--primary)' : '3px solid transparent',
                                            transition: 'all 0.3s ease',
                                            transform: selectedImage === img ? 'scale(1.05)' : 'scale(1)'
                                        }}
                                        onMouseEnter={(e) => {
                                            if (selectedImage !== img) {
                                                e.currentTarget.style.opacity = '0.8';
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (selectedImage !== img) {
                                                e.currentTarget.style.opacity = '0.6';
                                            }
                                        }}
                                    >
                                        <img src={img} alt={`View ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                ))}
                            </div>

                            <div style={{ padding: '2rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                                    <div>
                                        <h1 style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '0.5rem' }}>{house.title}</h1>
                                        <p style={{ color: 'var(--text-light)', display: 'flex', alignItems: 'center' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem' }}>
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                                <circle cx="12" cy="10" r="3"></circle>
                                            </svg>
                                            {house.location}
                                        </p>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--primary)' }}>KSh {house.price.toLocaleString()}</div>
                                        <div style={{ color: 'var(--text-light)' }}>/month</div>
                                    </div>
                                </div>

                                <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', margin: '2rem 0' }} />

                                {/* About Section */}
                                <div style={{ marginBottom: '2.5rem' }}>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>About this house</h3>
                                    <p style={{ color: '#4b5563', lineHeight: 1.7 }}>
                                        {house.description || "No description available for this property."}
                                    </p>
                                </div>

                                {/* Amenities */}
                                <div style={{ marginBottom: '2.5rem' }}>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>Amenities & Features</h3>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '1rem' }}>
                                        {house.amenities ? house.amenities.map((amenity, idx) => (
                                            <div key={idx} style={{ display: 'flex', alignItems: 'center', color: '#374151', padding: '0.5rem', backgroundColor: '#f3f4f6', borderRadius: '0.5rem' }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem', color: 'var(--primary)' }}>
                                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                                </svg>
                                                {amenity}
                                            </div>
                                        )) : (
                                            <p style={{ color: '#9ca3af' }}>No specific amenities listed.</p>
                                        )}
                                    </div>
                                </div>

                                {/* Landmarks */}
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>Nearby Landmarks</h3>
                                    <p style={{ display: 'flex', alignItems: 'center', color: '#4b5563', backgroundColor: '#ecfdf5', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #d1fae5' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.75rem', color: 'var(--primary)' }}>
                                            <path d="M3 3v18h18" /><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
                                        </svg>
                                        {house.landmarks || "Not specified"}
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* Sticky Sidebar / CTA */}
                        {/* Note: In a real responsive layout this might move. For now we put it below on mobile or stick it. */}
                        <div style={{ marginTop: '2rem' }}>
                            {/* Top Sidebar Ad */}
                            <AdBanner slotId="SIDEBAR_AD" style={{ margin: '0 0 1rem 0' }} />

                            <div style={{
                                backgroundColor: 'white',
                                padding: '2rem',
                                borderRadius: '1rem',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                                border: '1px solid #e5e7eb',
                                position: 'sticky',
                                top: '100px'
                            }}>
                                <a
                                    href={`https://wa.me/254735047202?text=Hello,%20I%20am%20interested%20in%20the%20${house.title}%20in%20${house.location}%20(ID:%20${house.id})`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn"
                                    style={{ width: '100%', backgroundColor: '#25D366', color: 'white', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', padding: '1rem' }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem' }}>
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                    </svg>
                                    WhatsApp Admin
                                </a>

                                <a
                                    href="tel:+254735047202"
                                    className="btn"
                                    style={{ width: '100%', border: '1px solid #e5e7eb', color: 'var(--text-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem' }}>
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                    Call Now
                                </a>

                                <div style={{
                                    backgroundColor: '#fff7ed',
                                    border: '1px solid #ffedd5',
                                    color: '#c2410c',
                                    padding: '1rem',
                                    borderRadius: '0.5rem',
                                    fontSize: '0.9rem',
                                    display: 'flex',
                                    alignItems: 'start',
                                    lineHeight: '1.5'
                                }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.75rem', flexShrink: 0, marginTop: '2px' }}>
                                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                                        <line x1="12" y1="9" x2="12" y2="13"></line>
                                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                    </svg>
                                    <div>
                                        <strong>Note:</strong> Viewing fee may apply. All houses are verified before posting.
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Sidebar Ad */}
                            <AdBanner slotId="SIDEBAR_BOTTOM_AD" style={{ margin: '1rem 0 0 0' }} />
                        </div>

                    </div>

                    <AdBanner slotId="DETAILS_BOTTOM_BANNER" />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ListingDetails;
