import axios from 'axios';

const fetchData = async () => {
  try {
	const API_URL = 'http://localhost:5000/api/posts';
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { fetchData };
