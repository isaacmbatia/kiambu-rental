import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { getOptimizedImage } from '../utils/imageUtils';

const ListingCard = ({ house }) => {
    return (
        <div className="listing-card" style={{
            backgroundColor: 'white',
            border: '1px solid #e5e7eb',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Link to={`/listing/${house._id || house.id}`} style={{ position: 'relative', display: 'block' }}>
                <img
                    src={getOptimizedImage(house.imageUrl, 400)}
                    alt={house.title}
                    className="listing-card-image"
                    loading="lazy"
                    style={{ width: '100%', objectFit: 'cover' }}
                />
                {house.verified && (
                    <span style={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        backgroundColor: 'var(--primary)',
                        color: 'white',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '9999px',
                        fontSize: '0.7rem',
                        fontWeight: 'bold'
                    }}>
                        VERIFIED
                    </span>
                )}
                {house.isNew && (
                    <span style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        backgroundColor: '#f97316',
                        color: 'white',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '9999px',
                        fontSize: '0.7rem',
                        fontWeight: 'bold'
                    }}>
                        NEW
                    </span>
                )}
            </Link>

            <div className="listing-card-content" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', fontWeight: 600, marginBottom: '0.5rem' }}>
                    <Link to={`/listing/${house._id || house.id}`} style={{ color: 'inherit' }}>{house.title}</Link>
                </h3>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '0.75rem',
                    color: 'var(--text-light)',
                    fontSize: 'clamp(0.8rem, 2vw, 0.9rem)'
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.25rem', flexShrink: 0 }}>
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {house.location}
                </div>

                <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '0.25rem' }}>
                    <span style={{
                        fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
                        fontWeight: 700,
                        color: 'var(--primary)',
                        marginRight: '0.25rem'
                    }}>
                        KSh {house.price.toLocaleString()}
                    </span>
                    <span style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>/month</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginBottom: '1rem' }}>
                    Deposit: KSh {house.price.toLocaleString()}
                </div>

                <div style={{ marginTop: 'auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                    <Link
                        to={`/listing/${house._id || house.id}`}
                        className="btn btn-primary"
                        style={{
                            textAlign: 'center',
                            backgroundColor: '#f97316',
                            borderColor: '#f97316',
                            padding: '0.6rem 0.5rem',
                            fontSize: 'clamp(0.75rem, 2vw, 0.9rem)'
                        }}
                    >
                        View Details
                    </Link>
                    <a
                        href={`https://wa.me/254735047202?text=Is%20this%20house%20still%20available?%20${house.title}%20in%20${house.location}`}
                        className="btn"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            backgroundColor: '#25D366',
                            color: 'white',
                            textAlign: 'center',
                            padding: '0.6rem 0.5rem',
                            fontSize: 'clamp(0.75rem, 2vw, 0.9rem)'
                        }}
                    >
                        WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
};

export default memo(ListingCard);
