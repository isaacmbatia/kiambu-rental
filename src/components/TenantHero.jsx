import React from 'react';

const TenantHero = () => {
    return (
        <div className="relative" style={{ height: '500px', width: '100%', position: 'relative' }}>
            {/* Background Image with Overlay */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(/hero-bg.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.6)'
                }}
            ></div>

            {/* Content */}
            <div
                className="container"
                style={{
                    position: 'relative',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    color: 'white',
                    zIndex: 10
                }}
            >
                <h1 style={{
                    fontSize: '3.5rem',
                    fontWeight: 800,
                    marginBottom: '1rem',
                    textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    lineHeight: '1.2'
                }}>
                    Vacant Houses in Kiambu
                </h1>
                <p style={{
                    fontSize: '1.5rem',
                    fontWeight: 500,
                    textShadow: '0 1px 2px rgba(0,0,0,0.5)',
                    maxWidth: '800px'
                }}>
                    Find Verified Vacant Houses Near You
                </p>

                <div style={{ marginTop: '2.5rem' }}>
                    <a href="#listings" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
                        Find Your Home
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TenantHero;
