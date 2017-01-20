// eslint-disable-next-line import/prefer-default-export
export const getPublicPath = path => (
    (process.env.URL_PUBLIC_PATH || '') + (path || '/')
);

