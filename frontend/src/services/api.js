import axios from 'axios';

// Base URLs for different APIs
const BASE_URL_POSTS = 'http://127.0.0.1:8000/api/posts/';
const BASE_URL_AUTH = 'http://127.0.0.1:8000/api/token/';

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
  const response = await axios.get(BASE_URL_POSTS, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  return response.data;
};

// Create a new post
export const createPost = async (post) => {
  const response = await axios.post(BASE_URL_POSTS, post, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  return response.data;
};
