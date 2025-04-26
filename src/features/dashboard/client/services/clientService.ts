import axios from "axios";
import { ClientType } from "../components/columns";
import { useAuth } from "@/provider/AuthContext";
import { useDashboard } from "@/provider/DashboardContext";

const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/api/users`;

export const useClientServices = async () => {
  const { token } = useAuth();
  const { clientId } = useDashboard();

  const SaveClient = async (data: ClientType) => {
    if (clientId === 0) {
        const response = await axios.post(`${apiUrl}/clients`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          withCredentials: true, // Optional: Only if you are using cookies / sessions
        });
        return response.data;
    }
  };

  return { CreateClient };
};
