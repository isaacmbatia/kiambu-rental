import React from 'react';

const TenantHero = () => {
    return (
        <div className="hero-section" style={{ width: '100%', position: 'relative' }}>
            {/* Background Image with Overlay */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${import.meta.env.BASE_URL}hero-bg.png)`,
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
                    zIndex: 10,
                    padding: '2rem 1rem'
                }}
            >
                <h1 className="hero-title">
                    Vacant Houses in Kiambu
                </h1>
                <p className="hero-subtitle">
                    Find Verified Vacant Houses Near You
                </p>

                <div style={{ marginTop: '2rem' }}>
                    <a
                        href="#listings"
                        className="btn btn-primary"
                        style={{
                            fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                            padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2.5rem)'
                        }}
                    >
                        Find Your Home
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TenantHero;
