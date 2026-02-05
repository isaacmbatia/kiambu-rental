import React from 'react';

const SearchFilters = ({ filters, setFilters }) => {
    const locations = [
        "All Locations",
        "Ndumberi",
        "Kiambu Town",
        "Kirigiti",
        "Riabai",
        "Thindigua",
        "Ridgeways",
        "Ngegu",
        "Ruiru",
        "Kiambu Road"
    ];

    const houseTypes = [
        "All Types",
        "Single Room",
        "Bedsitter",
        "1 Bedroom",
        "2 Bedroom",
        "3 Bedroom"
    ];

    const priceRanges = [
        { label: "Any Price", min: 0, max: Infinity },
        { label: "Under 10k", min: 0, max: 10000 },
        { label: "10k - 15k", min: 10000, max: 15000 },
        { label: "15k - 20k", min: 15000, max: 20000 },
        { label: "20k - 30k", min: 20000, max: 30000 },
        { label: "Above 30k", min: 30000, max: Infinity }
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="container" style={{ marginTop: '-40px', position: 'relative', zIndex: 20 }}>
            <div style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '1rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.5rem',
                border: '1px solid #e5e7eb'
            }}>
                {/* Location Filter */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontWeight: 600, fontSize: '0.9rem', color: '#374151' }}>Location</label>
                    <div style={{ position: 'relative' }}>
                        <select
                            name="location"
                            value={filters.location}
                            onChange={handleChange}
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                borderRadius: '0.5rem',
                                border: '1px solid #d1d5db',
                                backgroundColor: '#f9fafb',
                                appearance: 'none',
                                cursor: 'pointer'
                            }}
                        >
                            {locations.map(loc => (
                                <option key={loc} value={loc}>{loc}</option>
                            ))}
                        </select>
                        <div style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#9ca3af' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                        </div>
                    </div>
                </div>

                {/* House Type Filter */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontWeight: 600, fontSize: '0.9rem', color: '#374151' }}>House Type</label>
                    <div style={{ position: 'relative' }}>
                        <select
                            name="type"
                            value={filters.type}
                            onChange={handleChange}
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                borderRadius: '0.5rem',
                                border: '1px solid #d1d5db',
                                backgroundColor: '#f9fafb',
                                appearance: 'none',
                                cursor: 'pointer'
                            }}
                        >
                            {houseTypes.map(type => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                        <div style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#9ca3af' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                        </div>
                    </div>
                </div>

                {/* Price Filter */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontWeight: 600, fontSize: '0.9rem', color: '#374151' }}>Max Price</label>
                    <div style={{ position: 'relative' }}>
                        <select
                            name="price"
                            value={filters.price}
                            onChange={handleChange}
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                borderRadius: '0.5rem',
                                border: '1px solid #d1d5db',
                                backgroundColor: '#f9fafb',
                                appearance: 'none',
                                cursor: 'pointer'
                            }}
                        >
                            {priceRanges.map(range => (
                                <option key={range.label} value={range.label}>{range.label}</option>
                            ))}
                        </select>
                        <div style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#9ca3af' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchFilters;
