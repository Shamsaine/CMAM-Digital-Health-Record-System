import axios from 'axios';

// Base URLs for different APIs
const BASE_URL_POSTS = 'http://127.0.0.1:8000/api/posts/';
const BASE_URL_AUTH = 'http://127.0.0.1:8000/api/token/';
const BASE_URL_RECORDS = 'http://127.0.0.1:8000/api/records/';

// Save tokens to localStorage
const saveTokens = (accessToken, refreshToken) => {
  localStorage.setItem('accessToken', accessToken);
  if (refreshToken) localStorage.setItem('refreshToken', refreshToken);
};

// Get access token from localStorage
const getAccessToken = () => localStorage.getItem('accessToken');

// Get refresh token from localStorage
const getRefreshToken = () => localStorage.getItem('refreshToken');

// Axios instance with default settings
const axiosInstance = axios.create({
  baseURL: BASE_URL_POSTS,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor for adding Authorization header
axiosInstance.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Interceptor for handling token refresh
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response &&
      error.response.status === 401 &&
      error.response.data.code === 'token_not_valid' &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        const response = await axios.post(`${BASE_URL_AUTH}refresh/`, {
          refresh: getRefreshToken(),
        });
        saveTokens(response.data.access, response.data.refresh);
        axiosInstance.defaults.headers.Authorization = `Bearer ${response.data.access}`;
        originalRequest.headers.Authorization = `Bearer ${response.data.access}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error('Token refresh failed:', refreshError.response ? refreshError.response.data : refreshError.message);
        localStorage.clear(); // Clear tokens if refresh fails
        throw refreshError;
      }
    }
    return Promise.reject(error);
  }
);

// Login API
export const login = async (username, password) => {
  try {
    const response = await axios.post(BASE_URL_AUTH, {
      username,
      password,
    });
    // Save tokens to localStorage
    saveTokens(response.data.access, response.data.refresh);
    return response.data;
  } catch (error) {
    console.error('Login failed:', error.response ? error.response.data : error.message);
    throw error.response ? error.response.data : error.message;
  }
};

// Refresh token
const refreshToken = async () => {
  try {
    const refreshToken = getRefreshToken();
    const response = await axios.post(`${BASE_URL_AUTH}refresh/`, {
      refresh: refreshToken,
    });
    saveTokens(response.data.access, response.data.refresh);
    return response.data.access;
  } catch (error) {
    console.error('Token refresh failed:', error.response ? error.response.data : error.message);
    throw error.response ? error.response.data : error.message;
  }
};

// Fetch posts
export const fetchPosts = async () => {
  const response = await axios.get(BASE_URL_POSTS);
  return response.data;
};

// Create a new post
export const createPost = async (postData) => {
  let token = getAccessToken(); // Declare token in the outer scope
  try {
    console.log("Token:", token); // Debugging: Log token

    const response = await axios.post(BASE_URL_POSTS, postData, {
      headers: {
        Authorization: `Bearer ${token}`, // Include the token in the headers
      },
    });
    console.log("Response:", response); // Debugging: Log response
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401 && error.response.data.code === 'token_not_valid') {
      // Token is not valid, try to refresh it
      try {
        token = await refreshToken();
        const response = await axios.post(BASE_URL_POSTS, postData, {
          headers: {
            Authorization: `Bearer ${token}`, // Include the new token in the headers
          },
        });
        console.log("Response after token refresh:", response); // Debugging: Log response
        return response.data;
      } catch (refreshError) {
        console.error('Token refresh failed:', refreshError.response ? refreshError.response.data : refreshError.message);
        throw refreshError.response ? refreshError.response.data : refreshError.message;
      }
    } else {
      console.error('Creating post failed:', error.response ? error.response.data : error.message);
      throw error.response ? error.response.data : error.message;
    }
  }
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
  let token = getAccessToken(); // Declare token in the outer scope
  try {
    console.log("Token:", token); // Debugging: Log token

    const response = await axios.post(`${BASE_URL_RECORDS}patients/`, patientData, {
      headers: {
        Authorization: `Bearer ${token}`, // Include the token in the headers
      },
    });
    console.log("Response:", response); // Debugging: Log response
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401 && error.response.data.code === 'token_not_valid') {
      // Token is not valid, try to refresh it
      try {
        token = await refreshToken();
        const response = await axios.post(`${BASE_URL_RECORDS}patients/`, patientData, {
          headers: {
            Authorization: `Bearer ${token}`, // Include the new token in the headers
          },
        });
        console.log("Response after token refresh:", response); // Debugging: Log response
        return response.data;
      } catch (refreshError) {
        console.error('Token refresh failed:', refreshError.response ? refreshError.response.data : refreshError.message);
        throw refreshError.response ? refreshError.response.data : refreshError.message;
      }
    } else {
      console.error('Creating patient failed:', error.response ? error.response.data : error.message);
      throw error.response ? error.response.data : error.message;
    }
  }
};

// Create a new progress record
export const createProgressRecord = async (progressData) => {
  let token = getAccessToken(); // Declare token in the outer scope
  try {
    console.log("Token:", token); // Debugging: Log token

    const response = await axios.post(`${BASE_URL_RECORDS}progress-records/`, progressData, {
      headers: {
        Authorization: `Bearer ${token}`, // Include the token in the headers
      },
    });
    console.log("Response:", response); // Debugging: Log response
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401 && error.response.data.code === 'token_not_valid') {
      // Token is not valid, try to refresh it
      try {
        token = await refreshToken();
        const response = await axios.post(`${BASE_URL_RECORDS}progress-records/`, progressData, {
          headers: {
            Authorization: `Bearer ${token}`, // Include the new token in the headers
          },
        });
        console.log("Response after token refresh:", response); // Debugging: Log response
        return response.data;
      } catch (refreshError) {
        console.error('Token refresh failed:', refreshError.response ? refreshError.response.data : refreshError.message);
        throw refreshError.response ? refreshError.response.data : refreshError.message;
      }
    } else {
      console.error('Creating progress record failed:', error.response ? error.response.data : error.message);
      throw error.response ? error.response.data : error.message;
    }
  }
};
