import axios from 'axios';

// Create an instance of Axios with a base URL
const instance = axios.create({
  baseURL: ' https://backend.getlinked.ai', // Replace with your base URL
});

export default instance