import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ListingCard from './components/ListingCard';
import Footer from './components/Footer';
import TenantHero from './components/TenantHero';
import SearchFilters from './components/SearchFilters';
import AdBanner from './components/AdBanner';


function Home() {
    const [houses, setHouses] = useState([]);
    const [filters, setFilters] = useState({
        location: "All Locations",
        type: "All Types",
        price: "Any Price"
    });

    useEffect(() => {
        const fetchHouses = async () => {
            try {
                const apiBase = import.meta.env.VITE_API_URL || '';
                const res = await fetch(`${apiBase}/api/houses`);
                const data = await res.json();
                setHouses(data);
            } catch (err) {
                console.error('Error fetching houses:', err);
            }
        };
        fetchHouses();
    }, []);

    const getPriceRange = (label) => {
        switch (label) {
            case "Under 10k": return { min: 0, max: 10000 };
            case "10k - 15k": return { min: 10000, max: 15000 };
            case "15k - 20k": return { min: 15000, max: 20000 };
            case "20k - 30k": return { min: 20000, max: 30000 };
            case "Above 30k": return { min: 30000, max: Infinity };
            default: return { min: 0, max: Infinity };
        }
    };

    const filteredHouses = houses.filter(house => {
        if (filters.location !== "All Locations") {
            if (!house.location.toLowerCase().includes(filters.location.toLowerCase())) {
                return false;
            }
        }
        if (filters.type !== "All Types") {
            const typeTerm = filters.type.toLowerCase();
            const match = house.type.toLowerCase().includes(typeTerm) ||
                house.title.toLowerCase().includes(typeTerm);
            if (!match) return false;
        }
        const { min, max } = getPriceRange(filters.price);
        if (house.price < min || house.price > max) {
            return false;
        }
        return true;
    });

    return (
        <div className="home-page">
            <Navbar />
            <TenantHero />
            <SearchFilters filters={filters} setFilters={setFilters} />

            <div className="container">
                <AdBanner slotId="HOME_TOP_BANNER" />
            </div>

            <div className="section container" id="listings">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <h2 className="section-title" style={{ margin: 0, textAlign: 'left' }}>Latest Verified Houses</h2>
                    <a href="#" style={{ color: 'var(--primary)', fontWeight: 600 }}>View All &rarr;</a>
                </div>

                <div className="responsive-grid">
                    {filteredHouses.length > 0 ? (
                        filteredHouses.map(house => (
                            <ListingCard key={house.id} house={house} />
                        ))
                    ) : (
                        <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem 2rem', color: 'var(--text-light)' }}>
                            <div style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>No houses found matching your filters.</div>
                            <button
                                onClick={() => setFilters({ location: "All Locations", type: "All Types", price: "Any Price" })}
                                className="btn btn-primary"
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <div className="container">
                <AdBanner slotId="HOME_BOTTOM_BANNER" />
            </div>

            <Features />
            <Hero />
            <Footer />
        </div>
    );
}

export default Home;
