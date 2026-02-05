import React, { useEffect } from 'react';

const AdBanner = ({ slotId, format = "auto", style = {} }) => {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
            console.error("AdSense error:", err);
        }
    }, []);

    return (
        <div style={{ margin: '2rem 0', textAlign: 'center', overflow: 'hidden', ...style }}>
            <div style={{ fontSize: '0.75rem', color: '#9ca3af', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Advertisement
            </div>
            <ins className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-YOUR_PUBLISHER_ID_HERE"
                data-ad-slot={slotId || "1234567890"}
                data-ad-format={format}
                data-full-width-responsive="true"></ins>
        </div>
    );
};

export default AdBanner;
