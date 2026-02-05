import React from 'react';
import { Link } from 'react-router-dom';

const ListingCard = ({ house }) => {
    return (
        <div style={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '0.75rem', overflow: 'hidden', transition: 'box-shadow 0.2s', display: 'flex', flexDirection: 'column' }}>
            <Link to={`/listing/${house.id}`} style={{ position: 'relative', height: '240px', display: 'block' }}>
                <img
                    src={house.imageUrl}
                    alt={house.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                {house.verified && (
                    <span style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'var(--primary)', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 'bold' }}>
                        VERIFIED
                    </span>
                )}
                {house.isNew && (
                    <span style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: '#f97316', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 'bold' }}>
                        NEW
                    </span>
                )}
            </Link>

            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                    <Link to={`/listing/${house.id}`} style={{ color: 'inherit' }}>{house.title}</Link>
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: 'var(--text-light)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.25rem' }}>
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {house.location}
                </div>

                <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '0.25rem' }}>
                    <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)', marginRight: '0.25rem' }}>
                        KSh {house.price.toLocaleString()}
                    </span>
                    <span style={{ color: 'var(--text-light)' }}>/month</span>
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-light)', marginBottom: '1.5rem' }}>
                    Deposit: KSh {house.price.toLocaleString()}
                </div>

                <div style={{ marginTop: 'auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                    <Link
                        to={`/listing/${house.id}`}
                        className="btn btn-primary"
                        style={{ textAlign: 'center', backgroundColor: '#f97316', borderColor: '#f97316' }}
                    >
                        View Details
                    </Link>
                    <a
                        href={`https://wa.me/254735047202?text=Is%20this%20house%20still%20available?%20${house.title}%20in%20${house.location}`}
                        className="btn"
                        target="_blank"
                        rel="noreferrer"
                        style={{ backgroundColor: '#25D366', color: 'white', textAlign: 'center' }}
                    >
                        WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ListingCard;
