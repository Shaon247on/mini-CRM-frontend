// import { useAuth } from "@/provider/AuthContext";
// import axios from "axios";

// const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/api/users`;

// export type UserRole = 'freelancer' | 'client';

// export const useAuthService = () => {
//   const { login: setAuthData, logout } = useAuth();

//   const addClient = async (data: { username: string; email: string; password: string, photo?: string | undefined, role: UserRole; }) => {
//     const response = await axios.post(`${apiUrl}/register`, data);
//     return response.data;
//   };

//   const login = async (data: { email: string; password: string }) => {
//     const response = await axios.post(`${apiUrl}/login`, data);
//     const { token, user } = response.data;
//     setAuthData(token, user);
//     return response.data;
//   };

//   return { register, login, logout };
// };
