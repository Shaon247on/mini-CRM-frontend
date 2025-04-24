import axios from "axios";

const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/api/users`;

export const register = async (data: { username: string; email: string; password: string }) => {
  const response = await axios.post(`${apiUrl}/register`, data);
  return response.data;
};

export const login = async (data: { email: string; password: string }) => {
  const response = await axios.post(`${apiUrl}/login`, data);
  localStorage.setItem("token", response.data.token); // Store JWT token in localStorage
  return response.data;
};
