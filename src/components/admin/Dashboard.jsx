import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [houses, setHouses] = useState([]);
    const [filters, setFilters] = useState({
        location: "All Locations",
        type: "All Types",
        price: "Any Price"
    });
    const [formData, setFormData] = useState({
        title: '',
        location: '',
        price: '',
        type: '',
        description: '',
        amenities: '',
        landmarks: ''
    });
    const [images, setImages] = useState([]);
    const [submitting, setSubmitting] = useState(false);
    const navigate = useNavigate();

    // Filter Options
    const locations = [
        "All Locations", "Ruaka", "Ndumberi", "Kiambu Town", "Kirigiti", "Riabai",
        "Thindigua", "Ridgeways", "Ngegu", "Ruiru", "Kiambu Road"
    ];

    const houseTypes = [
        "All Types", "Single Room", "Bedsitter", "1 Bedroom", "2 Bedroom", "3 Bedroom"
    ];

    const priceRanges = [
        { label: "Any Price", min: 0, max: Infinity },
        { label: "Under 10k", min: 0, max: 10000 },
        { label: "10k - 15k", min: 10000, max: 15000 },
        { label: "15k - 20k", min: 15000, max: 20000 },
        { label: "20k - 30k", min: 20000, max: 30000 },
        { label: "Above 30k", min: 30000, max: Infinity }
    ];

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) navigate('/admin');
        fetchHouses();
    }, []);

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

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFilterChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        setImages(e.target.files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const data = new FormData();

        Object.keys(formData).forEach(key => {
            data.append(key, formData[key]);
        });

        for (let i = 0; i < images.length; i++) {
            data.append('images', images[i]);
        }

        setSubmitting(true);
        try {
            const apiBase = import.meta.env.VITE_API_URL || '';
            console.log('Posting to:', `${apiBase}/api/houses`);
            const res = await fetch(`${apiBase}/api/houses`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: data
            });

            if (res.ok) {
                alert('House posted successfully!');
                setFormData({
                    title: '', location: '', price: '', type: '', description: '', amenities: '', landmarks: ''
                });
                setImages([]);
                // Clear the file input manually if needed
                const fileInput = document.querySelector('input[type="file"]');
                if (fileInput) fileInput.value = '';

                fetchHouses();
            } else {
                const errorData = await res.json();
                alert(`Failed to post: ${errorData.message || 'Server error'}`);
            }
        } catch (err) {
            console.error('Submit Error:', err);
            alert('Error connecting to posting service. Check if server is running.');
        } finally {
            setSubmitting(false);
        }
    };

    const handleDelete = async (id) => {
        if (!id) return;
        if (!window.confirm('Are you sure you want to delete this listing?')) return;

        const token = localStorage.getItem('token');
        try {
            const apiBase = import.meta.env.VITE_API_URL || '';
            const res = await fetch(`${apiBase}/api/houses/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (res.ok) fetchHouses();
            else alert('Failed to delete listing');
        } catch (err) {
            alert('Error deleting house');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/admin');
    };

    // Filtering Logic
    const getPriceRange = (label) => {
        const range = priceRanges.find(r => r.label === label);
        return range || { min: 0, max: Infinity };
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
        <div style={{ padding: '2rem', backgroundColor: '#f9fafb', minHeight: '100vh' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>Admin Dashboard</h1>
                    <button onClick={handleLogout} className="btn" style={{ border: '1px solid #d1d5db' }}>Logout</button>
                </div>

                <div className="admin-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>

                    {/* Add House Form */}
                    <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>Post New House</h2>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <input name="title" placeholder="Title (e.g. 1 Bedroom Apartment)" value={formData.title} onChange={handleChange} required style={inputStyle} />
                            <select name="location" value={formData.location} onChange={handleChange} required style={inputStyle}>
                                <option value="">Select Location</option>
                                {locations.filter(l => l !== "All Locations").map(loc => (
                                    <option key={loc} value={loc}>{loc}</option>
                                ))}
                                <option value="Other">Other</option>
                            </select>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <input name="price" type="number" placeholder="Price (KSh)" value={formData.price} onChange={handleChange} required style={inputStyle} />
                                <select name="type" value={formData.type} onChange={handleChange} required style={inputStyle}>
                                    <option value="">Select Type</option>
                                    {houseTypes.filter(t => t !== "All Types").map(type => (
                                        <option key={type} value={type}>{type}</option>
                                    ))}
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required style={{ ...inputStyle, minHeight: '100px' }} />
                            <input name="amenities" placeholder="Amenities (comma separated: WiFi, CCTV)" value={formData.amenities} onChange={handleChange} style={inputStyle} />
                            <input name="landmarks" placeholder="Nearby Landmarks" value={formData.landmarks} onChange={handleChange} style={inputStyle} />

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Upload Photos (Max 10)</label>
                                <input type="file" multiple accept="image/*" onChange={handleImageChange} required />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary"
                                style={{ marginTop: '1rem', opacity: submitting ? 0.7 : 1, cursor: submitting ? 'not-allowed' : 'pointer' }}
                                disabled={submitting}
                            >
                                {submitting ? 'Posting...' : 'Post House'}
                            </button>
                        </form>
                    </div>

                    {/* Published Listings */}
                    <div>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>Published Listings</h2>

                        {/* Filters */}
                        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                            <select name="location" value={filters.location} onChange={handleFilterChange} style={filterInputStyle}>
                                {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                            </select>
                            <select name="type" value={filters.type} onChange={handleFilterChange} style={filterInputStyle}>
                                {houseTypes.map(type => <option key={type} value={type}>{type}</option>)}
                            </select>
                            <select name="price" value={filters.price} onChange={handleFilterChange} style={filterInputStyle}>
                                {priceRanges.map(range => <option key={range.label} value={range.label}>{range.label}</option>)}
                            </select>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {filteredHouses.map(house => (
                                <div key={house._id || house.id} style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '0.5rem', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ width: '80px', height: '60px', borderRadius: '0.25rem', overflow: 'hidden', backgroundColor: '#e5e7eb' }}>
                                        {house.imageUrl && <img src={house.imageUrl} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontWeight: 600 }}>{house.title}</div>
                                        <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>{house.location} - KSh {house.price}</div>
                                    </div>
                                    <button
                                        onClick={() => handleDelete(house._id || house.id)}
                                        style={{ color: 'red', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem' }}
                                    >
                                        Delete
                                    </button>
                                </div>
                            ))}
                            {filteredHouses.length === 0 && <div style={{ color: '#6b7280', fontStyle: 'italic', padding: '1rem', backgroundColor: 'white', borderRadius: '0.5rem' }}>No houses found matching your filters.</div>}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

const inputStyle = {
    padding: '0.75rem',
    borderRadius: '0.5rem',
    border: '1px solid #d1d5db',
    width: '100%'
};

const filterInputStyle = {
    padding: '0.5rem',
    borderRadius: '0.25rem',
    border: '1px solid #d1d5db',
    fontSize: '0.9rem',
    flex: 1
};

export default Dashboard;
