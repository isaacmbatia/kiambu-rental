// src/utils/apiCache.js
// Simple in-memory cache for API responses

const cache = new Map();

export const apiCache = {
    get(key) {
        return cache.get(key);
    },
    set(key, value) {
        cache.set(key, value);
    },
    clear() {
        cache.clear();
    },
};
