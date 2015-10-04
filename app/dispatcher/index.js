import reactMiddleware from './react';

export default {
    /**
     * Init function for route and render based on React
     *
     * @returns {Function} react-router-middleware for connect
     */
    react: function() {
        return reactMiddleware;
    },
};
