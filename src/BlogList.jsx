import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { blogs } from './data/blogs';

const BlogList = () => {
    useEffect(() => {
        document.title = 'Blog | Kiambu Rental - Real Estate Tips & Rental Guides Kiambu';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Find the latest real estate tips, rental guides, and house hunting advice for Kiambu County. Learn about affordable estates, bedsitters, and more.');
        }
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="blog-list-page">
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
                        Kiambu Rental Blog
                    </h1>
                    <p style={{
                        fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                        maxWidth: '700px',
                        margin: '0 auto',
                        opacity: 0.95,
                        lineHeight: 1.6,
                        padding: '0 1rem'
                    }}>
                        Latest news, guides, and tips for house hunting in Kiambu County.
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="section" style={{ backgroundColor: 'var(--bg-light)' }}>
                <div className="container">
                    <div className="responsive-grid" style={{
                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                        display: 'grid',
                        gap: '2rem'
                    }}>
                        {blogs.map((blog) => (
                            <div key={blog.id} className="listing-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="listing-card-image"
                                    style={{ height: '220px' }}
                                />
                                <div className="listing-card-content" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginBottom: '0.5rem', display: 'block' }}>
                                        {blog.date}
                                    </span>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-dark)' }}>
                                        {blog.title}
                                    </h3>
                                    <p style={{ fontSize: '0.95rem', color: 'var(--text-light)', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
                                        {blog.excerpt}
                                    </p>
                                    <Link to={`/blog/${blog.slug}`} className="btn btn-primary" style={{ width: 'auto', alignSelf: 'flex-start' }}>
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default BlogList;
