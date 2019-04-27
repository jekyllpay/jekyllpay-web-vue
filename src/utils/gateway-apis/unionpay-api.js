import axios from 'axios'

// scheme 'http' or "https" is required in BASE_URL
let BASE_URL = process.env.NODE_ENV === "production" ? process.env.BASE_URL : 'http://localhost:8080';