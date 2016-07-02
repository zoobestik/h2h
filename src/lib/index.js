import axios from 'axios';
import serializeForm from 'form-serialize';

export const generateId = () => String(Math.random()) + Date.now();

export const serialize = (form, options) => ({
    url: form.action,
    method: form.method,
    data: serializeForm(form, {
        empty: true,
        ...(options || {}),
    }),
});

const requestDefaultHeader = {
    Accept: 'application/json;charset=UTF-8',
};

const getHeaders = data => {
    const headers = data || {};

    return {
        ...headers,
        ...['common', 'patch', 'post', 'put'].reduce((result, method) => ({
            ...result,
            [method]: {
                ...requestDefaultHeader,
                ...(headers[method] || {}),
            },
        }), {}),
    };
};

export const sendFormData = data => axios({
    responseType: 'json',
    ...data,
    headers: getHeaders(data.headers),
});

export const sendForm = ({ _, ...data }) => sendFormData(data);
