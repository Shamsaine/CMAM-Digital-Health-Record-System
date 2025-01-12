import axios from 'axios';

// Base URLs for different APIs
const BASE_URL_POSTS = 'http://127.0.0.1:8000/api/posts/';
const BASE_URL_AUTH = 'http://127.0.0.1:8000/api/token/';
const BASE_URL_RECORDS = 'http://127.0.0.1:8000/api/records/';

// Login API
export const login = async (username, password) => {
  try {
    const response = await axios.post(BASE_URL_AUTH, {
      username,
      password,
    });
    // Save tokens to localStorage
    localStorage.setItem('accessToken', response.data.access);
    localStorage.setItem('refreshToken', response.data.refresh);
    return response.data;
  } catch (error) {
    console.error('Login failed:', error.response.data);
    throw error.response.data;
  }
};

// Fetch posts
export const fetchPosts = async () => {
  const response = await axios.get(BASE_URL_POSTS);
  return response.data;
};

// Create a new post
export const createPost = async (postData) => {
  const response = await axios.post(BASE_URL_POSTS, postData);
  return response.data;
};

// Fetch patients
export const fetchPatients = async () => {
  try {
    const response = await axios.get(`${BASE_URL_RECORDS}patients/`);
    console.log("Fetch patients response:", response); // Debugging: Log response
    return response.data;
  } catch (error) {
    console.error('Fetching patients failed:', error.response ? error.response.data : error.message);
    throw error.response ? error.response.data : error.message;
  }
};

// Create a new patient
export const createPatient = async (patientData) => {
  try {
    const response = await axios.post(`${BASE_URL_RECORDS}patients/`, patientData);
    return response.data;
  } catch (error) {
    console.error('Creating patient failed:', error.response.data);
    throw error.response.data;
  }
};
