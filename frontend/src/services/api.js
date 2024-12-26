import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api/posts/';

export const fetchPosts = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const createPost = async (post) => {
  const response = await axios.post(BASE_URL, post, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return response.data;
};
