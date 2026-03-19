import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { blogs } from './data/blogs';

const BlogPost = () => {
    const { slug } = useParams();
    const blog = blogs.find(b => b.slug === slug);

    useEffect(() => {
        if (blog) {
            document.title = `${blog.title} | Kiambu Rental Blog`;
            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) {
                metaDescription.setAttribute('content', blog.excerpt);
            }
            window.scrollTo(0, 0);
        }
    }, [blog]);

    if (!blog) {
        return <Navigate to="/blog" />;
    }

    return (
        <div className="blog-post-page">
            <Navbar />

            {/* Post Header */}
            <header className="about-hero" style={{
                background: 'linear-gradient(135deg, #14532d 0%, #16a34a 100%)',
                color: 'white',
                textAlign: 'center',
                padding: 'clamp(3rem, 6vw, 4rem) 0'
            }}>
                <div className="container">
                    <div style={{ marginBottom: '1rem' }}>
                        <Link to="/blog" style={{ color: 'white', opacity: 0.8, fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                            Back to Blog
                        </Link>
                    </div>
                    <h1 style={{
                        fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                        fontWeight: 700,
                        marginBottom: '1rem',
                        lineHeight: 1.2,
                        maxWidth: '900px',
                        margin: '0 auto 1rem'
                    }}>
                        {blog.title}
                    </h1>
                    <div style={{ opacity: 0.9, fontSize: '1rem' }}>
                        Published on {blog.date}
                    </div>
                </div>
            </header>

            {/* Post Content */}
            <article className="section" style={{ backgroundColor: 'var(--bg-light)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div style={{
                        backgroundColor: 'white',
                        padding: 'clamp(1.5rem, 5vw, 3rem)',
                        borderRadius: '1rem',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                        color: 'var(--text-dark)',
                        lineHeight: 1.8
                    }}>
                        <img
                            src={blog.image}
                            alt={blog.title}
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '0.75rem',
                                marginBottom: '2rem',
                                objectFit: 'cover'
                            }}
                        />

                        <div className="blog-content">
                            {blog.content.split('\n\n').map((paragraph, idx) => {
                                if (paragraph.trim().startsWith('###')) {
                                    return <h3 key={idx} style={{ fontSize: '1.5rem', fontWeight: 700, margin: '2rem 0 1rem', color: 'var(--primary)' }}>
                                        {paragraph.replace('###', '').trim()}
                                    </h3>;
                                }
                                if (paragraph.trim().startsWith('*')) {
                                    return (
                                        <ul key={idx} style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                                            {paragraph.split('\n').map((item, i) => (
                                                <li key={i}>{item.replace('*', '').trim()}</li>
                                            ))}
                                        </ul>
                                    );
                                }
                                if (paragraph.trim().startsWith('1.') || paragraph.trim().startsWith('2.')) {
                                    return (
                                        <ol key={idx} style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                                            {paragraph.split('\n').map((item, i) => {
                                                const match = item.match(/^\d+\.\s+\*\*(.+?)\*\*:\s+(.+)$/);
                                                if (match) {
                                                    return <li key={i}><strong>{match[1]}</strong>: {match[2]}</li>;
                                                }
                                                return <li key={i}>{item.replace(/^\d+\.\s+/, '').trim()}</li>;
                                            })}
                                        </ol>
                                    );
                                }
                                if (paragraph.trim().startsWith('👉')) {
                                    return (
                                        <div key={idx} style={{ margin: '2.5rem 0', pading: '1.5rem', backgroundColor: 'var(--bg-light)', borderRadius: '0.75rem', borderLeft: '5px solid var(--primary)', padding: '1.5rem' }}>
                                            <p style={{ margin: 0, fontWeight: 600 }}>
                                                {paragraph.trim()}
                                            </p>
                                            <div style={{ marginTop: '1rem' }}>
                                                <Link to="/" className="btn btn-primary" style={{ fontSize: '0.9rem' }}>Browse Listings</Link>
                                            </div>
                                        </div>
                                    );
                                }
                                return <p key={idx} style={{ marginBottom: '1.5rem' }}>{paragraph.trim()}</p>;
                            })}
                        </div>

                        <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', margin: '3rem 0' }} />

                        <div style={{ textAlign: 'center' }}>
                            <h4 style={{ marginBottom: '1rem' }}>Share this guide with others:</h4>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                                <a href={`https://wa.me/?text=Check out this guide from Kiambu Rental: ${window.location.href}`} target="_blank" rel="noopener noreferrer" className="btn" style={{ backgroundColor: '#25D366', color: 'white', fontSize: '0.85rem' }}>Share on WhatsApp</a>
                                <Link to="/blog" className="btn" style={{ backgroundColor: '#f3f4f6', color: 'var(--text-dark)', fontSize: '0.85rem' }}>More Articles</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <Footer />
        </div>
    );
};

export default BlogPost;
