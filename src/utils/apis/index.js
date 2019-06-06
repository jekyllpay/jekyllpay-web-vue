import axios from 'axios';

const BASE_URL = process.env.NODE_ENV === 'production' ? 'https://api.jekyllpay.com' : 'http://localhost:8080' ;

export {
    BASE_URL,
    axios
} 