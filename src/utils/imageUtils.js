// src/utils/imageUtils.js
/**
 * Optimizes Cloudinary image URLs by adding width and quality transformations.
 * @param {string} url - The original image URL.
 * @param {number} width - Desired width (default 400).
 * @returns {string} - Optimized URL.
 */
export const getOptimizedImage = (url, width = 400) => {
    if (!url || typeof url !== 'string' || !url.includes('cloudinary.com')) return url;

    // Prevent double transformation
    if (url.includes('/upload/w_') || url.includes('/upload/q_auto')) return url;

    if (url.includes('/upload/')) {
        return url.replace('/upload/', `/upload/w_${width},q_auto,f_auto/`);
    }
    return url;
};
